const express = require('express');
const router = express.Router();
const { registerController, signinController, activationController } = require('../../controller/Auth/authController');


router.post('/register',registerController);

router.post('/activation', activationController)

router.post('/login',signinController);

module.exports = router;
