// const users = [
//     {id: 1, name: "Serhii", surname: "Hudym", role: "developer"},
//     {id: 2, name: "Andrii", surname: "Drozdov", role: "mentor"},
// ];


const User = require("./user-model");

getUsers = async (req, res) => {
    let users;

    if (req.params.id) {
        users = await User.findById(req.params.id);
    } else {
        users = await User.find();
    }

    res.send(users);
}

createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.send(user);
}

module.exports = {
    getUsers,
    createUser
}