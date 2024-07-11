const express=require('express')
const cors = require('cors');

const app=express();
const port = 3001;

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());


app.get("/get-labels",(req,res)=>{
    const data=require("./data.json")
    return res.status(201).json({labels:data.labels})
})


app.get("/get-meals",(req,res)=>{
    const data=require("./data.json")
    return res.status(201).json({meals:data.meals})
})

const server = app.listen(port, () => {
    console.log(`Server is running on : ${port}`);
});