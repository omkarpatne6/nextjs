import mongoose from 'mongoose'

const connection = {};

const connect = async () => {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

    connection.isConnected = db.connections[0].readyState;

    console.log(connection.isConnected)
}

export default connect
