const router = require("express").Router();
const repo = require("../repos/contactUs");

router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const data = await repo.addContactRequest(req.body);
        return res.status(201).json(data);
    }
    catch (e) {
        return res.status(400).json(e);
    }
});

module.exports = router;