const express = require("express");
const { getWallet, createWallet } = require("../controllers/walletController");

const router = express.Router();

router.get("/", getWallet);
router.post("/", createWallet);


module.exports = router