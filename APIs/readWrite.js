const fs = require('fs');

if(process.argv.includes("debug")) {
    console.log(JSON.stringify(process.argv));
}

if(process.argv.includes("read")) {
    read();
}

if(process.argv.includes("write")) {
    var writeLoc = process.argv.indexOf("write");
    write(writeLoc);
}

function read() {
    fs.readFile("./data/data.json", "utf8", (err, jsonStr) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", jsonStr);
    });
}

function write(writeLoc) {
    var writeVal = process.argv[writeLoc + 1];
    const jsonString = JSON.stringify([{"Stored Data": writeVal}])
    fs.writeFile("./data/data.json", jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}