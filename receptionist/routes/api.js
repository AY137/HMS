
const express = require('express');
const router = express.Router();
router.get('/ninjas', function (req, reS) {
    res.send({ type: 'GET' });
});

router.post('/ninjas', function (req, reS) {
    res.send({ type: 'POST' });
});





router.put('/ninjas/:id', function (req, reS) {
    res.send({ type: 'PUT' });
});





router.delete('/ninjas/:id', function (req, reS) {
    res.send({ type: 'DELETE' });
});

module.exports = router;