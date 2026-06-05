import jwt from 'jsonwebtoken';
  const authmiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader) {
        return res.status(401).json({message: 'Unauthorized'});
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'secretkey', (err, user) => {
        if(err) {
            return res.status(403).json({message: 'Forbidden'});
        }
        req.user = user;
        next();
    });
};

export default authmiddleware;