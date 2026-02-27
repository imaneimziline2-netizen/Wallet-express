const express = require("express");
const { getWallet, createWallet, deposit, getWalId } = require("../controllers/walletController");

const router = express.Router();

router.get("/", getWallet);
router.post("/", createWallet);
router.post("/:id", deposit);
router.get("/:id",getWalId);


module.exports = router