<?php
$regex = '/^[\w\-_. ]+$/';

$words = [
    '1',
    '211',
    'aaa',
    '222aaaa',
    'aaaa1222',
    'aaaa1222__',
    'aaaa1222__---',
    'aaaa1222__--- ',
    'aaaa1222__--- .',
    '.asdf-asd - _f',
    '.asdf-%asd - _f',
    '.asdf-%asd - _f',
];

foreach ($words as $word) {
    if (!preg_match($regex, $word)) {
        var_dump($word);
    }
}

echo vsprintf(
    'The sort order has to be specified as %1 for ascending order or %2 for descending order.',
    [1, 1]
);
