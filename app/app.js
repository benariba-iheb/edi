const app = require ('express') ();
const PORT = process.env.PORT || 3500;

import express from 'express';
import {get_customer , get_order , get_orderitem , get_product} from './bdd_conection.js';



app.use(express.urlencoded( {extended : false} ) );
app.use(express.json());



app.get("/:id" , async (req , res) => {
     const id = req.params.id
     const order = await get_order(id)
     res.send(order)
})

app.get("/orderitem/:id" , async (req , res) => { 
     const id = req.params.id 
     const orderitem = await get_orderitem(id)
     res.send(orderitem)
})

app.get("/customer/:id" , async (req , res) => {
     const id = req.params.id
     const customer = await get_customer(id)
     res.send(customer)
})

app.get("/product/:id" , async (req , res) => {
     const id = req.params.id
     const product = await get_product(id)
     res.send(product)
})



//error handling
app.all('*' , (req , res) => {
     res.status(404)
     console.log('this is from app.all')
     if(req.accepts('html')){
          res.sendFile(path.join(__dirname , 'page' , '404.html'))
          console.log('sent an html file')
     }
     else if(req.accepts('json')){
          res.json({error : "404 not found"})
          console.log('sent an json file')
     }
     else{
          res.type('txt').send('404 not found')
          console.log('sent an text file')
     }
})


app.listen(8080 , () =>{
     console.log('server running')
})