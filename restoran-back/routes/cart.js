const router = require("express").Router();
const repo = require("../repos/cart");

router.post("/", async (req, res) => {
    console.log("post");
    try {
        const req_data = { ...req.body };
        delete req_data["id"];
        console.log(req_data);
        const data = await repo.addCart(req_data);
        return res.status(201).json(data);
    }
    catch (e) {
        console.log("already error");
        console.log(e);
        return res.status(400).json(e);
    }
});

router.get("/:id?", async (req, res) => {
    try {
        let data;
        if (req.params.id) {
            data = await repo.getCartById(req.params.id);
            return res.json(data);
        }
        else {
            const data = await repo.getAllCarts();
            return res.json(data);
        }
    }
    catch (e) {
        return res.status(400).json(e);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const data = await repo.removeCart(req.params.id);
        return res.json(data);
    }
    catch (e) {
        return res.status(400).json(e);
    }
});

router.put("/:id", async (req, res) => {
    try {
        await repo.updateCart(req.params.id, req.body);
        const data = await repo.getCartById(req.params.id);
        return res.json(data);
    } catch (e) {
        return res.status(400).json(e);
    }
});


module.exports = router;