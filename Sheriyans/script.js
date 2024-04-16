const fs = require('fs');


//code to create a file

// fs.writeFile("test1.txt","This is a test file for my practice.", function(err){
//   if(err) throw err
//   console.log("file is created")
// })

//When we create the same file with new content, the previous file's content gets overwritten by the new content.

// fs.writeFile("test1.txt","This is a repeated test file for my practice.", function(err){
//   if(err) throw err;
//   console.log("file is created");
// })

//to add the content in exiting file we use appendFile

// fs.appendFile("test1.txt","this is my appended content", function(err){
//   if(err) throw err;
//   console.log("file is appended with new content")
// })

//To rename a file

// fs.rename("test", "test.txt",function(err){
//   if(err)throw err;
//   console.log("renaming is done")
// })

//to copy the file

// fs.copyFile("test.txt","./copy.txt",function(err){
//   if(err)throw err;
//   console.log("copying  is done")
// })
// fs.copyFile("test.txt","./s1/s2/copy.txt",function(err){
//   if(err)throw err;
//   console.log("copying  is done")
// })

//to delete a file we use unlink but we can only delete blank files with this method
// fs.unlink("copy.txt",function(err){
//   if(err) throw err
//   console.log("done")
// })

// fs.unlink("test.txt",function(err){
//   if(err) throw err.message;
//   console.log("done")
// })

//to remove non-empty folder we use this: {recursive:true}

// fs.rm("./copy",{recursive:true},function(err){
//   if(err) throw err;
//   console.log("removed folder")
// })