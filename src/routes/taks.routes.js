const {Router} = require('express');

const router = Router();
router.get('/tasks', (req, res) => {
    res.send('retrieving a list of tasks ');
})

router.get('/tasks/10', (req, res) => {
    res.send('retrieving a single tasks ');
})
router.post('/tasks', (req, res) => {
    res.send('creating a tasks ');
})
router.delete('/tasks', (req, res) => {
    res.send('deleting a tasks ');
})
router.put('/tasks', (req, res) => {
    res.send('updating a tasks ');
})

module.exports = router; 