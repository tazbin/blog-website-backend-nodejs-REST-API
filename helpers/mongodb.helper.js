const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('mongodb connected...')
    })
    .catch((err) => {
        console.log('ERROR: ' + err.message)
    });


mongoose.connection.on('connected', () => {
    console.log('mongodb successfully connected...')
});

// handling errors after initial connection
mongoose.connection.on('error', (err) => {
    console.log('ERROR!! mongodb after initial connection error!')
});

mongoose.connection.on('disconnected', () => {
    console.log('mongodb disconnected...')
});

process.on('SIGINT', async() => {
    await mongoose.connection.close()
    process.exit(0)
});