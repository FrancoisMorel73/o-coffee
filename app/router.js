import express from 'express';

import mainController from './controllers/mainController.js';
import coffeeController from './controllers/coffeeController.js';

const router = express.Router();

router.get('/', mainController.home);
router.get('/notre-boutique', mainController.ourStore);

router.get('/catalogue', coffeeController.catalog);
router.get('/catalogue/:id', coffeeController.coffeeDetails);

router.get('/catalogue/api/coffees', coffeeController.getPaginatedCatalog);

export default router;