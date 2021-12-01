<?php

$hello = 'hello';
$pattern = '/hello/i';
$changed = preg_replace($pattern, '"h", "e", "o"', $hello);

echo $changed;

