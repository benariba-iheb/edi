import express from 'express';
import { get_Customer_id , get_first_name , get_last_name , get_city , get_country , get_phone } from './requetes.js';
import {start_connection , query , end_connection} from './bdd_conection.js'
const app = express();
const PORT = process.env.PORT || 3500;





app.use(express.urlencoded( {extended : false} ) );
app.use(express.json());


app.get("/*" , (req , res) => {     
     console.log(req)
     res.json({message : "hello world"})
     }
)
 
/* app.get("/:id" , async (req , res) => {
     const id = req.params.id
     const order = await request.get_Customer_id(id)
     res.send(order)
}) */

/*app.get("/orderitem/:id" , async (req , res) => { 
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
}) */



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


app.listen(PORT , () =>{
     console.log('server running')
})