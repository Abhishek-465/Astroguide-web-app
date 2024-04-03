const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
//middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//mongodb config

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://abhishekbhattacharjee12345:oDXFpKfvpTRZ7sco@cluster0.e8jra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
    const blogCollections = client.db("BlogInventory").collection("blogs");

    //insert a book to the db using POST method
    app.post("/upload-blog", async (req, res) => {
      const data = req.body;
      const result = await blogCollections.insertOne(data);
      res.send(result);
    });

    //get all books

    app.get("/all-blogs", async (req, res) => {
      const books = blogCollections.find();
      const result = await books.toArray();
      res.send(result);
    });

    //find by category

    app.get("/all-blogs", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await blogCollections.find(query).toArray();
      res.send(result);
    });

    //app.get("/book/:id", async(req,res)=>{
    // const id= req.params.id;
    // const filter ={ _id: new ObjectId(id)};
    //const result = await bookCollections.findOne(filter);
    //res.send(result);
    //})

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
