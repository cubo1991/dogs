const { Router } = require('express');
const DogRoute = require('./dogs')
const TemperamentoRoute = require('./temperaments')


const router = Router();

router.use('/dogs', DogRoute);
router.use('/temperaments', TemperamentoRoute)


module.exports = router;
