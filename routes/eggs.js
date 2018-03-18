const { Router } = require('express');
const path = require('path');
const eggRouter = Router();

eggRouter.get('/see-our-eggs', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/', 'eggs.html'));
});


module.exports = eggRouter;