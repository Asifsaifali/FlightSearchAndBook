const express=require('express');

const CityController=require('../../controller/city-controller');
const FlightController=require('../../controller/flight-controller');
const AirplaneController=require('../../controller/airplane-controller');

const router=express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.delet);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);

router.post('/flights',FlightController.create);
router.get('/flights/:id',FlightController.get);
router.delete('/flights/:id',FlightController.delet);

router.post('/airplanes',AirplaneController.create);
router.delete('/airplanes/:id',AirplaneController.delet);
router.patch('/airplanes/:id',AirplaneController.update);
router.get('/airplanes/:id',AirplaneController.get);
router.get('/airplanes',AirplaneController.getAll);

module.exports=router;