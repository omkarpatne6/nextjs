import mongoose from 'mongoose'

const connection = {};

const connect = async () => {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect("mongodb+srv://omkar:omkar123@test.ynj89.mongodb.net/nextjs?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

    connection.isConnected = db.connections[0].readyState;

    console.log(connection.isConnected)
}

export default connect
