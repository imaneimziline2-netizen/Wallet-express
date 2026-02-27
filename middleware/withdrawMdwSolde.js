
function withdrawMdwSolde(req, res, next) {
    const data = readData();
    const id = parseInt(req.params.id);
    const { amount, walletId } = req.body;
    const wallet = data.wallets.find((wal) => wal.id === walletId);
    if (wallet.user_id !== id) {
        return res.status(400).json({ messge: "Unauthorised" });
    }
    if (wallet.solde < amount) {
        return res.status(400).json("You don't have enough money");
    }
    next();
}
module.exports =withdrawMdwSolde
