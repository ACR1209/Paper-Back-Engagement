const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors())
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const Post = require("./models/Post");

//configure mongoose
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

mongoose.connect("mongodb+srv://theo:08JvfVOv1W5D3kXZ@cluster0.zleudlp.mongodb.net/Paper?retryWrites=true&w=majority", connectionParams)
.then( () => {
    console.log('Connected to the database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. n${err}`);
}
);

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.get("/all", async (req, res)=>{
    const data = await Post.find();
    
    res.send(data);
})

app.get("/data/:user", async (req, res)=>{
    const data = await Post.find({'user': req.params.user});
    
    res.send(data);
});

app.get('/get/:id', async (req, res) => {
    const id = req.params.id;
    const updatedPost = req.body;

    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).send({ error: "Post not found." });
        }

        res.send(post);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

app.put("/update/:id", async (req, res) => {
    const id = req.params.id;
    const updatedPost = req.body;
    console.log(req.body);
    try {
        console.log(updatedPost);
        const p = await Post.findByIdAndUpdate(id, updatedPost, { new: true });
        if (!p) {
            return res.status(404).send({ error: "Post not found." });
        }
        console.log(p);
        res.send(p);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


module.exports = app;