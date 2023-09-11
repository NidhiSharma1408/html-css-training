const router = require("express").Router();
const repo = require("../repos/services");

router.post("/", async (req, res) => {
    try {
        let data = [];
        for (let d of req.body) {
            data.push(await repo.addService(d));
        }
        return res.status(201).json(data);
    }
    catch (e) {
        console.log(e);
        return res.status(400).json(e);
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await repo.getAllServices();
        return res.json(data);
    }
    catch (e) {
        return res.status(400).json(e);
    }
})
module.exports = router;