const express = require('express')
const  router = express.Router()

const {getAllTasks, getTask, createTask, UpdateTask, DeleteTask} = require('../controllers/tasks')


router.get('/api/v1/tasks',getAllTasks)
router.get('/api/v1/tasks/:id', getTask)
router.post('/api/v1/tasks',createTask)
router.delete('/api/v1/tasks/:id',DeleteTask)
router.patch('/api/v1/tasks/:id',UpdateTask)

module.exports = router 