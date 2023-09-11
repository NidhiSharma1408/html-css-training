const router = require("express").Router();
const repo = require("../repos/menu");

router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const data = await repo.addMenu(req.body);
        return res.status(201).json(data);
    }
    catch (e) {
        return res.status(400).json(e);
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await repo.getAllMenus();
        return res.json(data);
    }
    catch (e) {
        return res.status(400).json(e);
    }
})
module.exports = router;