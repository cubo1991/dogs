const { Router } = require('express');



const router = Router();

router.get('/', (req,res, next) =>{
    res.send('get')
})
router.put('/', (req,res, next) =>{
    res.send('put')
})
router.post('/', (req,res, next) =>{
    res.send('post')
})
router.delete('/', (req,res, next) =>{
    res.send('delete')
})


module.exports = router;