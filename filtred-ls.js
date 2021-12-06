const fs = require('fs');
const path = require('path');
const directory= process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(directory, (err,ls)=>{
    if(err) console.error(err);
    ls.forEach(list=>{
        if(path.extname(list)=== extension){
            console.log(list);
        }
    });
});