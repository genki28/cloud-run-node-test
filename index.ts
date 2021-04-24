import express from 'express'
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.send('Cloud Runのテストしてみたよ')
})

app.listen(PORT, () => {
    console.log(`Running http://localhost:8080`)
})