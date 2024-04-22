const express = require('express')
const { getHomepage, postCreateUser, getCreatePages, getUpdatePages, postUpdateUser, postRemoveUser, getViewPages,
         postDeleteUser } = require('../controllers/home_controller')
const router = express.Router()

router.get('/', getHomepage) 
router.get('/create', getCreatePages)
router.get('/edit/:id', getUpdatePages)
router.get('/view/:id', getViewPages)

router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postRemoveUser)
 
module.exports = router;