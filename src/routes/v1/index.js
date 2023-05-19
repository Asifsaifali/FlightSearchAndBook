const express=require('express');

const CityController=require('../../controller/city-controller');
const FlightController=require('../../controller/flight-controller');
const AirplaneController=require('../../controller/airplane-controller');
const AirportController=require('../../controller/airport-controller')

const router=express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.delet);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);

router.post('/airports',AirportController.create);
router.get('/airports/:id',AirportController.get)
router.get('/airports/',AirportController.getAll)
router.delete('/airports/:id',AirportController.destroy)
router.patch('/airports',AirportController.update);


router.post('/flights',FlightController.create);
router.get('/flights/:id',FlightController.get);
router.patch('/flights/:id',FlightController.update);

router.post('/airplanes',AirplaneController.create);
router.delete('/airplanes/:id',AirplaneController.delet);
router.patch('/airplanes/:id',AirplaneController.update);
router.get('/airplanes/:id',AirplaneController.get);
router.get('/airplanes',AirplaneController.getAll);

module.exports=router;