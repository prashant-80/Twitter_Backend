const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const {DbConfig} = require('./config')
const app = express();
const passport = require('passport');
const { passportAuth } = require('./middlewares/jwt-middleware');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));  

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await DbConfig.connectDb()
    console.log('mongo is connected'); 

});
