import { createHash } from 'node:crypto';
import {
    copyFileSync,
    existsSync,
    mkdirSync,
    readdirSync,
    readFileSync,
    writeFileSync,
} from 'node:fs';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const projectRoot = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(projectRoot, 'public');
const imageSourceDir = resolve(projectRoot, 'resources/img');

function md5File(path) {
    return createHash('md5').update(readFileSync(path)).digest('hex');
}

function copyImages() {
    const targetDir = resolve(publicDir, 'img');

    mkdirSync(targetDir, { recursive: true });

    for (const file of readdirSync(imageSourceDir)) {
        copyFileSync(resolve(imageSourceDir, file), resolve(targetDir, file));
    }
}

function mixManifestPlugin() {
    return {
        name: 'log-viewer-mix-manifest',
        writeBundle() {
            copyImages();

            const manifest = {};
            const files = [
                '/app.js',
                '/app.css',
                ...readdirSync(resolve(publicDir, 'img')).map((file) => `/img/${file}`),
            ];

            for (const file of files) {
                const absolutePath = resolve(publicDir, file.slice(1));

                if (existsSync(absolutePath)) {
                    manifest[file] = `${file}?id=${md5File(absolutePath)}`;
                }
            }

            writeFileSync(
                resolve(publicDir, 'mix-manifest.json'),
                `${JSON.stringify(manifest, null, 4)}\n`,
            );
        },
    };
}

export default defineConfig({
    plugins: [vue(), mixManifestPlugin()],
    publicDir: false,
    resolve: {
        alias: {
            '@': resolve(projectRoot, 'resources/js'),
            vue: 'vue/dist/vue.runtime.esm-bundler.js',
        },
        symlinks: false,
    },
    build: {
        outDir: 'public',
        emptyOutDir: true,
        cssCodeSplit: false,
        rollupOptions: {
            input: resolve(projectRoot, 'resources/js/app.js'),
            output: {
                entryFileNames: 'app.js',
                chunkFileNames: 'chunks/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    if (extname(assetInfo.name ?? '') === '.css') {
                        return 'app.css';
                    }

                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
});
