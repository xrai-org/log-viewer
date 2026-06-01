<?php

namespace Workbench\App\Providers;

use Illuminate\Support\ServiceProvider;
use Opcodes\LogViewer\Facades\LogViewer;

class WorkbenchServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        LogViewer::auth(fn () => true);
    }
}
