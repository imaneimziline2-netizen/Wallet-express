const express = require("express");
const { getWallet, createWallet, deposit, getWalId, UpWallet,DeleteWallet } = require("../controllers/walletController");

const router = express.Router();

router.get("/", getWallet);
router.post("/", createWallet);
router.post("/:id", deposit);
router.get("/:id",getWalId);
router.put("/:id",UpWallet);
router.delete("/:id",DeleteWallet);


module.exports = router