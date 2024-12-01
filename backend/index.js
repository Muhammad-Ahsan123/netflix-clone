const express = require('express')
const dotenv = require('dotenv')
const connection = require('./config/mongoose.connect')
const cookieParser = require('cookie-parser')
const UserRouter = require('./routes/UserRouter')
const cors = require('cors')

connection()

dotenv.config({
    path: ".env"
})


const app = express()
// const port = 8080

//Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true, // Allow cookies to be sent
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


// Set Secure Cookies Middleware
app.use((req, res, next) => {
    res.setHeader('Set-Cookie', 'SameSite=None; Secure');
    next();
});



app.use('/api/v1/user', UserRouter)
http://localhost:8080/api/v1/user/register

app.get('/', () => {
    console.log('Intitial Page')
})

app.listen(process.env.PORT, () => {
    console.log(`your server is runing on this port localhost:${process.env.PORT}`);
})