const fs=require('fs');

const data="I am file";
fs.writeFileSync("./data.txt",data);