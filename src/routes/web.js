const express = require('express')
const { getHomepage, postCreateUser, getCreatePages, getUpdatePages, postUpdateUser, postRemoveUser, getViewPages,
         postDeleteUser } = require('../controllers/home_controller')

const router = express.Router();
// const handleImageUpload = require('../middleware/upload')
router.get('', getHomepage) 
router.get('/create', getCreatePages)
router.get('/edit/:id', getUpdatePages)
router.get('/view/:id', getViewPages)
// router.post('/upload-file', handleImageUpload)
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postRemoveUser)
// router.get('/upload-file', postUpload)
 
module.exports = router;