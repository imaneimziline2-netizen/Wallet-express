const { readData, writeData } = require("../Data/store");

exports.getAllUsers = (req, res) => {
    const data = readData();
    res.status(200).json(data.users);
    //   katsift arry kamla f format json GET =>tjib users kmlin
};

exports.createUser = (req, res) => {
    const data = readData();
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
    };

    data.users.push(newUser);
    writeData(data);

    return res.status(201).json(newUser);
    // katkhdm m3a post 1: kansaybo user jdid n,3tiw kola wahd id
    // 2: kanjibo smiya liya tsift mn client
};
exports.updateUser = (req, res) => {
    //  katkhdm put tbdl user
    const data = readData();

    const id = parseInt(req.params.id);
    const user = data.users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
const {name ,email,phone}=req.body
    user.name = name;
    user.email = email;
    user.phone = phone;
    writeData(data);
    res.json(user);

};

exports.deleteUser = (req, res) => {
    // DELETE katmsh user
    const id = parseInt(req.params.id);
    users = users.filter((u) => u.id !== id);

    res.json({ message: "User deleted" });
};
