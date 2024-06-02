const { MongoClient } = require('mongodb');
const uri = "mongodb://35.193.245.204:27017/testDatabase";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to the database");

    // Specify the collection
    const collection = client.db("testDatabase").collection("testCollection");

    // Insert a document
    const insertResult = await collection.insertOne({ name: "John Doe", age: 30 });
    console.log("Document inserted:", insertResult.insertedId);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
