const { Router } = require('express');
const RazaRoute = require('./raza')
const TemperamentoRoute = require('./temperamento')


const router = Router();

router.use('/raza', RazaRoute);
router.use('/temperamento', TemperamentoRoute)


module.exports = router;
