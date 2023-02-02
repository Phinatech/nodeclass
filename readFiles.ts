import fs from "fs";
import path from "path";
import unlink from "fs";

fs.readFile(
  path.join(__dirname, "my_files", "start.txt"),
  "utf-8",
  (error, data): void => {
    if (error) {
      console.log("failed to read file");
    } else {
      console.log("This is the data", data);
    }
  }
);

const restLetter = "i love computer programming";

fs.writeFile(
  path.join(__dirname, "my_files", "node.txt"),
  restLetter,
  (error) => {
    if (error) {
      console.log("An error occured" + error);
    } else {
      console.log("Wriiten");
    }

// //Append a file which means write to an existing file
    const rentUpdate =
      "\nif programming was the last thing on earth i will give my all to knowing it\nbecause of the great potenials in it.";
    fs.appendFile(
      path.join(__dirname, "my_files", "judith.txt"),
      rentUpdate,
      (error) => {
        if (error) {
          console.log("failed");
        } else {
          console.log("updated");
        }
      }
    );
  }
);

//creating a new folder
fs.mkdir("./profilfile", (error): void => {
  if (error) {
    console.log("failed to create folder" + error);
  } else {
    console.log("folder created");
  }
});

//to check if the folder exists
if (!fs.existsSync("./set06 file")) {
  fs.mkdir("./set06 file", (error): void => {
    if (error) {
      console.log("Cant creat folder");
    } else {
      console.log("created");
    }
  });
}

// //deleting a files

fs.unlink("./my_files/judith.txt", (error) => {
  if (error) {
    console.log("failed to delete file" + error);
  } else {
    console.log("file deleted");
  }
});
