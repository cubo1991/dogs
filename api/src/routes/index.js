const { Router } = require('express');
const DogRoute = require('./dog')
const TemperamentoRoute = require('./temperaments')


const router = Router();

router.use('/dog', DogRoute);
router.use('/temperaments', TemperamentoRoute)


module.exports = router;
