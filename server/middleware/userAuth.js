import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Login Again' })
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(tokenDecode)
        if (tokenDecode.id) {
            // console.log(req)
            if (!req.body) {
                req.body = {};
            }
            req.body.userId = tokenDecode.id;
            // req.user = { id: tokenDecode.id };
        } else {
            return res.json({ success: false, message: 'Not Authorized. Login Again' });
        }
        next();
    } catch (error) {
        res.json({ success: false, message: "ASDF " + error.message });
    }
}

export default userAuth;