<?php


function charCount($str)
{
    $hashTable = [];

    for ($i = 0; $i < strlen($str); $i++) {
        $char = strtolower($str[$i]);

        if (isset($hashTable[$char])) {
            $hashTable[$char]++;
        } else {
            $hashTable[$char] = 1;
        }
    }
    return $hashTable;
}

print_r(charCount("Contar los caracteres de la de este string."));
