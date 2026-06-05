import express from 'express';
const authmiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' });
    }   
};

const app = express();

app.listen(3000, () =>{
    console.log("Server running on port 3000");
});
