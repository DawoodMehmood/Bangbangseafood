const connectDB = require('./config/db')
const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv')
const multer = require('multer')
const cors = require('cors')
const contactRoutes = require('./routes/contactRoutes')
const menuRoutes = require('./routes/menuRoutes')


dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express()
app.use(cors());

//middleware
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('backend up')
// })
// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })

// routes
app.use('/api/contact', contactRoutes)
app.use('/api/menu', menuRoutes)


//database connection using mongoose
connectDB()
  .then(() => {
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log(`Server running on ${PORT}`.bgCyan.white);
    })
  })
  .catch((err) => {
    console.log(err)
  }) 