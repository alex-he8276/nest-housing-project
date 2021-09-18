import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(process.env.DB_CONNECTION);
    const db = client.db();

    const listingsCollection = db.collection("listings");

    // error handle with try catch?
    const result = await listingsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Listing inserted!" });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
}

export default handler;