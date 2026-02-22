const fs = require("fs");

fs.mkdir("myFolder", (err) => {
    if (err) {
        console.error("Problem creating folder:", err);
        return;
    }

    console.log("Folder created successfully.");

    fs.rmdir("myFolder", (err) => {
        if (err) {
            console.error("Problem deleting folder:", err);
            return;
        }

        console.log("Folder deleted successfully.");
    });
});