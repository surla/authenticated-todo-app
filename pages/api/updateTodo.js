import { table, getMinifiedRecord } from "./utils/Airtable.js"

export default async (req, res) => {
    const { id, fields } = req.body;

    try {
        const updatedRecord = await table.update([{ id, fields }]);
        res.statusCode = 200;
        res.json(getMinifiedRecord(updatedRecord[0]));
    } catch(err) {
        console.log(err)
        res.statusCode = 500;
        res.json({msg: 'Something went wrong'});
    }
};