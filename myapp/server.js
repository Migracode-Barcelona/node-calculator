const express = require('express');
const app = express();

const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
  };
  app.use(myLogger);

app.get('/add', (req, res) => {
let number1 = Number.parseInt(req.query.value1)
let number2 = Number.parseInt(req.query.value2)
    res.send(`CALCULATOR 
    ${number1} + ${number2} = ${number1 + number2}`)
});

app.get('/substract', (req, res) => {
    let number1 = Number.parseInt(req.query.value1)
    let number2 = Number.parseInt(req.query.value2)
        res.send(`CALCULATOR 
        ${number1} - ${number2} = ${number1 - number2}`)
    });

app.get('/multiply', (req, res) => {
        let number1 = Number.parseInt(req.query.value1)
        let number2 = Number.parseInt(req.query.value2)
            res.send(`CALCULATOR 
            ${number1} * ${number2} = ${number1 * number2}`)
        });

        app.get('/divide', (req, res) => {
            let number1 = Number.parseInt(req.query.value1)
            let number2 = Number.parseInt(req.query.value2)
                res.send(`CALCULATOR
                ${number1} / ${number2} = ${number1 / number2}`)
            });

            app.get('/add/:number1/:number2', (req, res) => {
                const number1 = req.params.number1.toString();
                const number2 = req.params.number2.toString();
                res.send(`CALCULATOR
                ${number1} + ${number2} = ${Number(number1) + Number(number2)}`)
            })

            app.get('/substract/:number1/:number2', (req, res) => {
                const number1 = req.params.number1.toString();
                const number2 = req.params.number2.toString();
                res.send(`CALCULATOR
                ${number1} - ${number2} = ${Number(number1) - Number(number2)}`)
            })

            app.get('/multiply/:number1/:number2', (req, res) => {
                const number1 = req.params.number1.toString();
                const number2 = req.params.number2.toString();
                res.send(`CALCULATOR
                ${number1} * ${number2} = ${Number(number1) * Number(number2)}`)
            })

            app.get('/divide/:number1/:number2', (req, res) => {
                const number1 = req.params.number1.toString();
                const number2 = req.params.number2.toString();
                res.send(`CALCULATOR
                ${number1} / ${number2} = ${Number(number1) / Number(number2)}`)
            })

app.listen(3000, () => console.log("Server is up and running"))