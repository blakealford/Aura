const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true, 
            useUnifedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4, 
        };
        mongoose.connect('mongodb+srv://admin:AuraSystemAdmin@cluster0.klc9v.mongodb.net/GuildInfo?retryWrites=true&w=majority', dbOptions);
        mongoose.set('UseFindAndModify', false);
        mongoose.Promise = global.Promise;
        mongoose.connection.on('connected', () => {
                console.log("Mongoose has sucessfuly connected | Aura now connected to the DataBase")
        });
        mongoose.connection.on('err', err => {
            console.error(`Mongoose connection error: \n${err.stack}`)
        });
        mongoose.connection.on('disconnected', () => {
            console.warn("Mongoose connection lost ")
    });
    }
}
        mongoose.connection.on('connected', () => {
                console.log("Mongoose has sucessfuly connected | Aura now connected to the DataBase")
        }};
        mongoose.connection.on('err', err => {
            console.error(`Mongoose connection error: \n${err.stack}`)
        });
        mongoose.connection.on('disconnected', () => {
            console.warn("Mongoose connection lost ")
    });
