const { expressjwt: jwt } = require("express-jwt")
function express_jwt() {
    const secret = process.env.secret
    return jwt({
        secret,
        algorithms: ["HS256"],
    }).unless({
        path: [`/UserRoute/login`, `/UserRoute/insert`]
    });
}

module.exports = express_jwt