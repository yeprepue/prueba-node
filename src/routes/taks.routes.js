const {Router} = require('express');
const pool = require('../db.js');

const router = Router();

router.get('/tasks', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    console.log(result)
    res.json('executed')
    
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