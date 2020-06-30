const express = require('express');
const morgan = require('morgan');
const authRouter = require('./routers/Auth/auth')
const hackathonRouter = require('./routers/Hackathon/hackathon')
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db/mongoose');
require('dotenv').config({
    path: './src/config/config.env'
});

const app = express();

app.use(bodyParser.json());
 
if(process.env.NODE_ENV === 'development'){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))

    app.use(morgan('dev'))
}

app.use('/api',authRouter);
app.use('/api',hackathonRouter);
 
app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log('The Server is up on PORT ' + PORT);
})

