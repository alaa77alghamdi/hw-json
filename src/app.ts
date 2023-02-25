import express,{Application,Request,Response} from "express";
const app:Application = express();
import data from "./data.json" ;
const port:number=3000;
app.use(express.json());

app.get("/", (req:Request, res:Response) => {
  res.send("hello ");

});


//challenge
app.get("/get", (req:Request, res:Response) => {


  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => res.send(json))
      
}
)


 



//delete
app.delete("/", (req:Request, res:Response) => {
  data.pop();
  res.json(data);
if(data==req.body.name){
 data.remove(req.body.name);

   res.json(data.json) }
        else{
         console.log("delete not found");
         }
});


//create and update data
app.post("/user", (req, res) => {
data.push({"name":req.body.name,"age":req.body.age});
data.push(req.body);
 res.json(data);
});



app.use(express.json());


//using the body to send the data

app.get('/user',(req, res) => {
console.log(req.body);
res.send(`hello ${req.body.name}     with id ${req.body.id}`)})




//Calculator using parameters

//add

app.get ('/add/:num1/:num2',(req,res)=>{
    const num1=parseInt(req.params.num1)
    const num2=parseInt(req.params.num2)
    const sum = num1+num2

   res.send(`adding: ${sum} `)
  
 


})
//sub
app.get('/sub/:num1/:num2',(req,res)=>{
    const num1=parseInt(req.params.num1)
    const num2=parseInt(req.params.num2)
    const sum = num1-num2

   res.send(`sub: ${sum} `)
  
 
})

//Multiply 
app.get('/Multiply/:num1/:num2',(req,res)=>{
    const num1=parseInt(req.params.num1)
    const num2=parseInt(req.params.num2)
    const sum = num1*num2

   res.send(`Multiply : ${sum} `)
  
 
})
//division
app.get('/division/:num1/:num2',(req,res)=>{
    const num1=parseInt(req.params.num1)
    const num2=parseInt(req.params.num2)
    const sum = num1/num2

   res.send(`division: ${sum} `)
  
 
})

app.listen(port, () => console.log("express Started"));