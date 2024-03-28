// routes/works.js
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const url = "https://api.webflow.com/v2/collections/65eec59c0fd2d28579f05f0b/items";
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                authorization: "Bearer cbbb60a29e31382e01dd86addb054c6b4b5fa28f7d209e7cc8778046751e656e",
            },
        };

        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        res.send(json.items);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

export default router;