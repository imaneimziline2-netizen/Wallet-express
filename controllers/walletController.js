const {readData ,writeData}=require("../Data/store");

// creaite wallet________

exports.createWallet =((req,res) => {
const {userId , name}= req.body;
    if(!userId || !name){
        return res.status(400).json({error : "userId and name are required"})
    }
    const data = readData();
    const newWallet = {
        id :Date.now(),
        user_id:userId,
        name,
        solde :0
    }
    data.wallets.push(newWallet);
    writeData(data)
    return res.status(200).json({message: "created"})
});

// GET all data _______
exports.getWallet =((req,res) =>{
    const data = readData();
    res.status(200).json(data.wallets)
});

// deposite _______
exports.deposit = (req,res)=>{
    const id =parseInt(req.params.id);
    const {amount}=req.body;

    if(!amount || amount<=0){
        return res.status(400).json({erro :"Amount must be positive"})
    }
    const data = readData();
    
}

