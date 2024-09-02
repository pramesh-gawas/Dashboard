const data = require("./jsondata.json");
console.log(data);

const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://pramesh:12345@cluster0.vgdsn12.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function insertData() {
  try {
    await client.connect();
    const db = client.db("Dashboard");
    const collection = db.collection("blacks");

    const result = await collection.deleteMany(data);
    console.log("Document inserted successfully:", result.insertedId);
  } catch (err) {
    console.error("Error inserting document:", err);
  } finally {
    await client.close();
  }
}

insertData();
