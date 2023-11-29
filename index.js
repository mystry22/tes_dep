const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.json('all good')
})

const PORT = 8900;

app.listen(PORT, ()=>{
    console.log('listening to port ' + PORT);
})