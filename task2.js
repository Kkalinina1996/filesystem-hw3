const fs = require("fs");


fs.writeFile("info.txt", "Node.js is awesome!", "utf-8", (err) => {
    if (err) {
        console.error("Error occurred while writing file:", err);
        return;
    }

    console.log("File was successfully created and written!");

    
    fs.readFile("info.txt", "utf-8", (err, data) => {
        if (err) {
            console.error("Error occurred while reading file:", err);
            return;
        }

        console.log("File content:");
        console.log(data);
    });
});