const { readData, writeData } = require("../Data/store");

// creaite wallet________

exports.createWallet = (req, res) => {
    const { userId, name } = req.body;
    if (!userId || !name) {
        return res.status(400).json({ error: "userId and name are required" });
    }
    const data = readData();
    const newWallet = {
        id: Date.now(),
        user_id: userId,
        name,
        solde: 0,
    };
    data.wallets.push(newWallet);
    writeData(data);
    return res.status(200).json({ message: "created" });
};

// GET all data _______
exports.getWallet = (req, res) => {
    const data = readData();
    res.status(200).json(data.wallets);
};

// deposite _______
exports.deposit = (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const { amount, walletId } = req.body;
    const wallet = data.wallets.find((wal) => wal.id === walletId);
    if (wallet.user_id !== id) {
        return res.status(400).json({ messge: "Unauthorised" });
    }
    wallet.solde += amount;
    writeData(data);
    res.status(200).json({ wallet });
};

// grtWALID
exports.getWalId = (req, res) => {
    const data = readData();
    const { id } = req.params;
    const wallet = data.wallets.find((wal) => wal.id === Number(id));
    if (!wallet) {
        res.status(404).json({ message: "not found" });
        return;
    }
    writeData(data);
    res.status(200).json(wallet);
};
// updat
exports.UpWallet = (req,res)=>{
    const data = readData();
}
