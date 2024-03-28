// routes/works.js
import express from "express";
const router = express.Router();

// example of a route that fetches data from the Webflow API
router.get("/", async (req, res) => {
    try {
        const url = "https://api.webflow.com/v2/collections/id/items";
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                authorization: "auth",
            },
        };

        const response = await fetch(url, options);
        const json = await response.json();
        res.send(json.items);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

export default router;