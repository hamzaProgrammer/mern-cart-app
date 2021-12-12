const express = require("express")
const router = express.Router();
const { Payment } =  require('../controllers/StripeController')

router.post('/payment', Payment)


module.exports = router