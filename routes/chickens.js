const { Router } = require('express');
const path = require('path');
const chickenRouter = Router();

chickenRouter.get('/see-our-chickens', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/', 'chickens.html'));
});


module.exports = chickenRouter;