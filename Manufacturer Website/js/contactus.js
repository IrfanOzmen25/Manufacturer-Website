
const fs = require('fs');

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {  
    e.preventDefault();
    var formData = JSON.stringify($("#form").serializeArray());
    console.log(formData);
    parsedFileData = JSON.parse(formData);
    const newFileData = JSON.stringify({
        ...parsedFileData,
      }, null, 4);
      
    fs.writeFileSync('Accounts.json', newFileData);
});
