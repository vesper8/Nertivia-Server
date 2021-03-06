const express = require('express');
const router = express.Router();

const path = require('path');
//Middlewares
const checkGDriveAvatar = require('./../middlewares/checkGDriveAvatar');


router.use('/',
	express.static(path.join(__dirname, '../public/avatars'), {
		extensions: ['jpg']
	}));

router.get('/*', checkGDriveAvatar,
	(req, res) =>
	res.sendFile(path.join(__dirname, '../public/avatars/default.png'))
)

module.exports = router;