const express=require('express');

const CityController=require('../../controller/city-controller');

const router=express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.delet);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);

module.exports=router;