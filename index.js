const express=require("express");
const app=express();
const{connectToMongodb}=require("./connect")
const urlroute=require("./Routes/url")
const URL=require('./models/url');
const { timeStamp } = require("console");
const PORT=8000;

connectToMongodb('mongodb://localhost:27017/short-url')
.then(()=>{
    console.log('Mongodb Connected!!')
}).catch((err)=>{
    console.log("Connection failed with Mongodb");
    
})
app.use(express.json());

app.use("/url",urlroute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    try {
        const entry = await URL.findOneAndUpdate({ ShortId: shortId },{$push:{
            visitHistory:{
                timeStamp:Date.now(),
            }
        }});

        // Check if entry is found
        if (!entry) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        // Redirect to the original URL
        res.redirect(entry.redirectUrl);
    } catch (err) {
        // Catch any errors and respond with a 500 status code
        return res.status(500).json({ error: 'An error occurred' });
    }
}); 



app.listen(PORT,()=>{
    console.log(`Server started successfully at Port:${PORT}`);
})




