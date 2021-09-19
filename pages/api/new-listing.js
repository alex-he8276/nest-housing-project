import { MongoClient } from 'mongodb';
import NodeGeocoder from 'node-geocoder';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(process.env.DB_CONNECTION);
    const db = client.db();
    const listingsCollection = db.collection("listings");

    // error handle with try catch?
    if (data.image == "") {
      client.close();
      res.status(400).json({ message: "Image not provided!" });
    } else if (data.location == "") {
      client.close();
      res.status(400).json({ message: "Location not provided!" });
    } else {
      const geocoder = NodeGeocoder({
        provider: 'google',
        apiKey: process.env.GOOGLE_MAP_KEY,
      });
      const results = await geocoder.geocode(data.location)
      data.coordinates[0] = results[0].latitude;
      data.coordinates[1] = results[0].longitude;

      const result = await listingsCollection.insertOne(data);

      client.close();

      res.status(201).json({ message: "Listing inserted!" });
    }
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