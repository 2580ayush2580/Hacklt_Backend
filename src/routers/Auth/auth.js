const express = require('express');
const router = express.Router();
const { registerController, signinController,resetPasswordController,forgotPasswordController, activationController } = require('../../controller/Auth/authController');


router.post('/register',registerController);

router.post('/activation', activationController)

router.post('/login',signinController);

router.put('/forgotpassword', forgotPasswordController);

router.put('/resetpassword', resetPasswordController);

module.exports = router;
