import connect from "../../util/dbconnect";

connect()

export default function handler(req, res) {

    res.json({ name : "omkar patne"})
};
