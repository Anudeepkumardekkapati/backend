import express from 'express';
const app = express();

app.use(express.json());  // to read JSON body


app.get('/', (req, res) => {
    res.send("api success");
});

app.post('/add-user', (req, res) => {

    let data = req.body; 

    console.log(data);
    console.log("ytfygjkhjl")
    res.send("data transfer success");
});

app.put('/edit-user',(req,res)=>{
    console.log("pass the data successfully");
    res.send("ok")

});
app.delete('/del-user',(req,res)=>{
    res.send("deleted successfully")
    console.log("del success");
})




app.listen(7007, () => {
    console.log("Server running on port 7007");
});
