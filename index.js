const express=require('express')
const app=express();
const port=8000
app.listen(port,function(err){
    if(err)
    {console.log('err in running server',err);return;}
    console.log(`server is running on port number:${port}`);
});
