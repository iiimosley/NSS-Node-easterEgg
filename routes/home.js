const { Router } = require('express');
const path = require('path');
const homeRouter = Router();

const homePath = ['/', '/home']

homeRouter.get(homePath, (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = homeRouter;