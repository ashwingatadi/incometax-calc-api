const express = require('express');
const cors = require('cors');
const tax = require('./calculateTax');
const port = process.env.PORT || 3000;

var app = express();
app.use(cors());

app.get('/getIncomeTax/:annualIncome', (req, res) => {
    var annualIncome = req.params.annualIncome;
    tax.calculateTax(annualIncome).then((incomeTax)=>{
        res.status(200).send(incomeTax.toString());
    },(error)=>{
        res.status(400).send(error.toString());
    })
})

app.listen(port, ()=>{
    console.log(`App Started on port ${port}`);
})