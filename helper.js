const jwt = require('jsonwebtoken');
function generateToken() {
    const envCongif = process.env;
    let jwtSecretKey = envCongif.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }

    const token = jwt.sign(data, jwtSecretKey);
    return token;
};

function validateJWTToken(token) {
    const envCongif = process.env;
    let tokenHeaderKey = envCongif.TOKEN_HEADER_KEY;
    let jwtSecretKey = envCongif.JWT_SECRET_KEY;
    try {
        //const token = req.header(tokenHeaderKey);
        console.log(token)
        const verified = jwt.verify(token, jwtSecretKey);
        console.log(verified)
        if (verified) {
            console.log("Successfully Verified");
        } else {
            console.log("Not Verified")
        }
    } catch (error) {
        console.log("Not Verified");
    }
}

exports.generateToken = generateToken;
exports.validateJWTToken = validateJWTToken;