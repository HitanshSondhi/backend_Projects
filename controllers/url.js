const shortid = require("shortid");
const URL = require('../models/url');

async function generateShortUrl(req, res) {
    const {body} = req;

    // Check if URL is provided
    if (!body.url) return res.status(400).json({ error: 'url is required' });

    // Generate a unique short ID
    const ShortId = shortid.generate();  // Corrected function call

    try {
        // Create the new URL entry in the database
        await URL.create({
            ShortId: ShortId,
            redirectUrl: body.url,
            visitHistory: [],
        });

        // Return the generated short ID
        return res.json({ id: ShortId });
    } catch (err) {
        // Handle any errors during the database operation
        return res.status(500).json({ error: 'An error occurred while creating the short URL' });
    }
}
async function handleGetAnalytics(req,res) {
    const shortId=req.params.ShortId;
    
}

module.exports = {
    generateShortUrl,
}
