import connect from "../../util/dbconnect";
import Mydata from "../../models/Next";

connect()

export default async function handler(req, res) {

    const { method } = req

    if (method == "GET") {
        try {
            const find = await Mydata.find({});
            res.status(200).send(find)
        } catch (error) {
            res.status(400).send(error)
        }
    } else if (method == "POST") {
        try {
            const send = await new Mydata(req.body);

            await send.save();

            res.status(200).send("Data submitted successfully");
        } catch (error) {
            res.status(400).send(`${e.name} : ${e.message}`)
        }
    }
};
