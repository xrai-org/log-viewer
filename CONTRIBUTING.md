# CONTRIBUTING

## Introduction

Hello and thank you for your interest in contributing to Log Viewer.

Contributions are welcome and there are many ways you can get involved!

To get started, choose your area of interest:

<table>
  <tr>
    <td  align="center">
        <a href="#-issues--discussions">👥 Issues & Discussions</a> |
        <a href="#-documentation">📚 Documentation</a> |
        <a href="#-spread-the-word">📣 Spread the word</a> |
        <a href="#-code-contribution">💻 Code Contribution</a>
    </td>
  </tr>
</table>

<br/>

---

### 👥 Issues & Discussions

You can interact with users by sharing information and asking/answering questions in our [Discussions](https://github.com/opcodesio/log-viewer/discussions) tab.

Also, you can contribute by reporting bugs, patching problems or providing technical support in our [Issues](https://github.com/opcodesio/log-viewer/issues) tab.

<br/>

---

### 📚 Documentation

Documentation is key for any project success!

Currently, our documentation is stored at the [README](https://github.com/opcodesio/log-viewer/blob/main/README.md) file of this repository.

You may contribute by improving existing information, covering missing topics, or fixing typos and grammar errors.

The documentation official language is in English.

<br/>

---

### 📣 Spread the word

If you enjoy Log Viewer, please consider talking about our project in your community.

Share this [repository link](https://github.com/opcodesio/log-viewer/) on Twitter, YouTube, Discord or any other social network you are part of.

You are also welcome to write articles, reviews and tutorials about this project on your blog or programming website.

Ah! Don't forget to let the author know about your work. Say hello to [@arukompas](https://github.com/arukompas).

<br/>

---

### 💻 Code Contribution

Please follow the steps below to contribute with code.

## Steps

### 📌 Step 1

Fork this repository and enter its directory.

Replace the placeholder `<YOUR-USERNAME>` with your GitHub username and run the command:

```shell
git clone https://github.com/<YOUR-USERNAME>/log-viewer.git && cd log-viewer
```

### 📌 Step 2

For isolated local development, launch the project Workshop instead of installing dependencies on the host:

```shell
workshop launch --wait-on-error
workshop run -- npm-ci
workshop run -- rebuild-assets
workshop run -- test
workshop run -- serve
```

Use `workshop shell` for an interactive prompt inside the isolated environment. The project is mounted at `/project`, while Node, npm, PHP, Composer, and installed dependencies stay inside the Workshop. `workshop run -- rebuild-assets` is the command that writes rebuilt assets back to `public/`.

### 📌 Step 3

Create a new branch for your code. You may call it `feature-` / `fix-` / `enhancement-` followed by the name of what you are developing.

For example:

```shell
git checkout -b feature/feature-new_about_page
```

Now, you can work on this newly created branch.

### 📌 Step 4

If you're working on the front-end of Log Viewer, rebuild the production CSS and JavaScript bundle inside the Workshop:

```shell
workshop run -- rebuild-assets
```

### 📌 Step 5

After you are done coding, please run Laravel Pint for code formatting inside the Workshop:

```Shell
workshop run -- format
```

Finally, run the Pest PHP tests inside the Workshop:

```Shell
workshop run -- test
```

### 📌 Step 6

You may want to install your modified version of Log Viewer inside a Laravel application, and test if it performs as expected.

In your Laravel application, modify the `composer.json` adding a `repositories` key with the `path` of Log-Viewer on your machine.

This will instruct composer to install Log Viewer from your local folder instead of using the version on the official repository.

Example:

```json
// File: composer.json

{
  "scripts": { ... },

  "repositories": [
    {
      "type": "path",
      "url": "/home/myuser/projects/log-viewer"

    }
  ]
}
```

Proceed with `composer require opcodesio/log-viewer`.

### 📌 Step 7

If you changed any CSS or JavaScript files, you must build the assets for production before committing.

Run the command:

```shell
workshop run -- rebuild-assets
```

### 📌 Step 8

Commit your changes. Please send short and descriptive commits.

For example:

```Shell
git commit -m "adds route for about page"
```

### 📌 Step 9

If all tests are ✅ passing, you may push your code and submit a Pull Request.

Please write a summary of your contribution, detailing what you are changing/fixing/proposing.

When necessary, please provide usage examples, code snippets and screenshots. You may also include links related to Issues or other Pull Requests.

Once submitted, your Pull Request will be marked for review and people will send questions, comments and eventually request changes.

---

🙏 Thank you for your contribution!
