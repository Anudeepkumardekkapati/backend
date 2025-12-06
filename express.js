import express from 'express';
const app=express();
app.get('/users',(req,res)=>{
    res.send("hello this is from express js for anu");
});
app.get('/get-users',(req,res)=>{
    res.send("this is the another page of express") ;

});

app.post('/add-user',(req,res)=>{
    res.send("user added successfully");                
});
app.listen(8080,()=>{
    console.log("server running at port 7007");

});