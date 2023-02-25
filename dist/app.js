"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let data = require("./data.json");
const port = 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("hello hhhh");
});
app.listen(port, () => console.log("express Started"));
app.delete("/", (req, res) => {
  data.pop();
  res.json(data);

       if(data==req.body.name){
          data.remove(req.body.name)
  res.json(data.json)

       }
       else{
        console.log("delete not found")
 ;
       }
});

app.post("/user", (req, res) => {



    
data.push({"name":req.body.name,"age":req.body.age});
data.push(req.body);


  res.json(data);
});



app.use(express.json());

app.get('/user',(req, res) => {
console.log(req.body);
res.send(`hello ${req.body.name}     with id ${req.body.id}`);

})




const fun1=(req,res,next)=>{
 console.log('hello');
 next();
}



const fun2 =(req,res)=>{
    res.status(200).send({"message":"GET"})

}


app.get('/',fun1,fun2)
const auth=('/add',(req, res,next) => {
    if(req.query.num1&num2!==""){

        res.send('it is not number')
       
    

    }


else{
    res.send('number' +adding())
    next()
}
})
app.get ('/add/:num1/:num2',auth,(req,res)=>{
    const num1=parseInt(req.params.num1)
    const num2=parseInt(req.params.num2)
    const sum = num1+num2

   res.send(`adding: ${sum} `)
  
 


})






app.get('/sub/:num1/:num2',(req,res)=>{
    const num1=parseInt(req.params.num1)
    const num2=parseInt(req.params.num2)
    const sum = num1-num2

   res.send(`sub: ${sum} `)
  
 
})


app.get('/multiple/:num1/:num2',(req,res)=>{
    const num1=parseInt(req.params.num1)
    const num2=parseInt(req.params.num2)
    const sum = num1*num2

   res.send(`multiple: ${sum} `)
  
 
})

app.get('/devided/:num1/:num2',(req,res)=>{
    const num1=parseInt(req.params.num1)
    const num2=parseInt(req.params.num2)
    const sum = num1/num2

   res.send(`devided: ${sum} `)
  
 
})
