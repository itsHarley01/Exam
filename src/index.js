import express from "express";
import r from "./myroutes.js"

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('P2 practical')
})
 
app.use(r)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.log('server started')
})