//middlewares.js
const User = require('./models/User');
const ApiKeys = require('./models/apiKeys')

async function verifyApiKey(req, res, next) {
    let userId = req.headers['x-user-id'];
    const apiKey = req.headers['x-api-key'];

    if (!userId || !apiKey) {
        return res.status(401).json({ error: 'User ID or API key is missing' });
    }

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        console.log("User id : " + userId)

        const apiKeyObj = await ApiKeys.findOne({
            where: { userId }
        });
        console.log("L'api key de mon utilisateur est : " + apiKeyObj.key);

        if (!apiKeyObj.key) {
            return res.status(401).json({ error: 'API key not found for user' });
        }

        if (apiKeyObj.key !== apiKey) {
            console.log(apiKeyObj.key)
            return res.status(401).json({ error: 'Invalid API key' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
    next();
}

module.exports = { verifyApiKey };
