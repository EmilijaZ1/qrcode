/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";



inquirer
  .prompt([{
    message: "type URL", 
    name: "URL"
    }])
  .then((answers) => {
    const url = answers.URL;
    console.log(url);
    var qr_svg = qr.image(url);

    qr_svg.pipe(fs.createWriteStream('test.png'));
    fs.writeFile("test.txt", url, (err) => { 
        if (err) 
          console.log(err); 
        else { 
          console.log("File written successfully\n"); 
        } 
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });





 
