const router = require("express").Router();
const repo = require("../repos/bookTable");

router.post("/", async (req, res) => {
    try {
        const data = await repo.addBooking(req.body);
        return res.status(201).json(data);
    }
    catch (e) {
        return res.status(400).json(e);
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await repo.getAllBookings();
        return res.json(data);
    }
    catch (e) {
        return res.status(400).json(e);
    }
})
module.exports = router;