const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', require('./routes/cipher/cipher'))

app.get('/', (req, res) => {
  res.send("Root of app")
});


app.listen(port, () => console.log(`Example express on port ${port}`))
