import generateName from "sillyName"
var sillyName = generateName();

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {"name": "URL", "message": "Type your url..."}
  ])
  .then((answers) =>{ 
    const URL = answers.URL;
    console.log(URL);

    // create the qr code
    var qr_svg = qr.image(URL, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('the_square.png'));

    // save the user input
    fs.writeFile('user_data.txt', URL, (err) => {
    if (err){
        console.error('File saving failed:', err); 
        return; // Stop execution if there's an error
        }
        console.log('The file has been saved!');
    }); 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


