
const fs = require("node:fs");


   // use of writeFile()
   

fs.writeFile("message.text", "write file ", (err) => {
  if (err) console.error(err);
  else console.log("The file has saved");
});

       // use of appendFile()

fs.appendFile("message.text", " data to append", (err)=> {
    if(err) console.error(err);
    else console.log("append")

})

        // use of copyFile()

fs.copyFile("message.text", "copy.text", (err)=> {
    if(err) console.error(err);
    else console.log("copyfile")

})

           // use of rename()

fs.rename("message.text", "file.text", (err)=> {
    if(err) console.error(err);
    else console.log("rename file ")

})

          // use of inlink

fs.unlink("file.text", (err)=> {
    if(err) console.error(err)
    else console.log("unlink file ")
})

       // use of stat

fs.stat("message.text", (err, stats) => {
  if(err) console.log(err)
    else console.log("is file?", stats.isFile())
})


         // use of readFile
 fs.readFile("message.text",(err, data ) => {
    if(err) console.error(err)
        else console.log("file data:", data.toString())
 })
