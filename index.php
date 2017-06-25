<?php

require_once __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/vendor/jesconstantine/pattern-kit/src/app.php';

$app['http_cache']->run();
