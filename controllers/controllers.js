import User from '../models/user_model.js';

async function GetUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send('Error');
    }
}

async function Register(req, res) {
    try {
        const user = new User(req.body);

        await user.save();

        res.status(201).send('User Registered Successfully');
    } catch (err) {
        res.status(500).send('Error');
    }
}
async function Delete(req, res) {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Error' });
    }
}

export { GetUsers, Register, Delete };
export { GetUsers, Register };

