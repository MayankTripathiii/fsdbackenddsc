const fs=require('fs');
const write=(data)=>{
    fs.writeFile("./data.txt",data,(err)=>{
        if (err)
            console.log("error writing file",err);
        else
        console.log("file writtensuccessfuly");
    console.log(data)
    });
}
write("I am new data");