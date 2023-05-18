<?php

// Check for arg values
if (in_array("debug", $argv)) {
    echo json_encode($argv) . "\n";
}

if (in_array("read", $argv)) {
    read();
}

if (in_array("write", $argv)) {
    $writeLoc = array_search("write", $argv);
    write($writeLoc, $argv);
}

// Read data from data.json file
function read() {
    $json_str = file_get_contents("./data/data.json");
    if ($json_str === false) {
        echo "File read failed\n";
        return;
    }
    echo "File data: " . $json_str . "\n";
}

// Write data to data.json file
function write($writeLoc, $argv) {
    $write_val = $argv[$writeLoc + 1];
    $json_data = json_encode([["Stored Data" => $write_val]]);
    if (file_put_contents("./data/data.json", $json_data) === false) {
        echo "Error writing file\n";
    } else {
        echo "Successfully wrote file\n";
    }
}
?>