const jwt = require('jsonwebtoken');

const jwtGenerator = (user_id, SECRET, expireTime) => {
    expireTime.toString();
    const payload = {
        user: user_id
    }

    return jwt.sign(payload, SECRET, { expiresIn: expireTime});
}

module.exports = jwtGenerator;