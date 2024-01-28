const mongoose = require('mongoose');

exports.connect = (app) => {
    const options = {}

    const connectWithRetry = () => {
        console.log('MongoDB Connection with retry')
        mongoose
            .connect(process.env.MONGODB_URI, options)
            .then(() => {
                console.log('MongoDB is connected')
                app.emit('ready')
            })
            .catch((err) => {
                console.log('MongoDB connection unsuccessful, retry after 5 seconds.', err)
                setTimeout(connectWithRetry, 5000)
            })
    }
    connectWithRetry()
}