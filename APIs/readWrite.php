<?php

if (in_array("debug", $argv)) {
    echo json_encode($argv) . "\n";
}

if (in_array("read", $argv)) {
    read();
}

if (in_array("write", $argv)) {
    $writeLoc = array_search("write", $argv);
    write($writeLoc);
}

function read() {
    $json_str = file_get_contents("./data/data.json");
    if ($json_str === false) {
        echo "File read failed\n";
        return;
    }
    echo "File data: " . $json_str . "\n";
}

function write($writeLoc) {
    $writeVal = $argv[$writeLoc + 1];
    $json_data = json_encode([["Stored Data" => $writeVal]]);
    if (file_put_contents("./data/data.json", $json_data) === false) {
        echo "Error writing file\n";
    } else {
        echo "Successfully wrote file\n";
    }
}
?>