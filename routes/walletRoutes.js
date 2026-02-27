const express = require("express");
const {
    getWallet,
    createWallet,
    deposit,
    getWalId,
    UpWallet,
    DeleteWallet,
    withdraw,
} = require("../controllers/walletController");
const withdrawMdwSolde = require("../middleware/withdrawMdwSolde");

const router = express.Router();

router.get("/", getWallet);
router.post("/", createWallet);
router.post("/:id", deposit);
router.get("/:id", getWalId);
router.put("/:id", UpWallet);
router.delete("/:id", DeleteWallet);
router.post("/:id/withdraw", withdrawMdwSolde, withdraw);

module.exports = router;
