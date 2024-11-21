import coffeeDataMapper from "../dataMapper/coffee.js";
import originDataMapper from "../dataMapper/origin.js";
import coffeeTypeDataMapper from "../dataMapper/coffeeType.js";

const coffeeController = {
    async catalog(req, res) {
        try {
            // récupérer les paramètres de la requête pour le filtrage
            const selectedCountry = req.query.pays || null;
            const selectedCoffeeType = req.query.type || null;

            // Récupérer des données
            const origins = await originDataMapper.getAll();
            const coffeeTypes = await coffeeTypeDataMapper.getAll();

            if (selectedCountry || selectedCoffeeType) {
                const coffees = await coffeeDataMapper.getAllFilteredByOriginAndType(selectedCountry, selectedCoffeeType);
                res.render('coffee/catalog', { coffees, origins, coffeeTypes, selectedCountry, selectedCoffeeType });
            } else {
                const limit = Number(req.query.limit) || 6;
                const offset = Number(req.query.offset) || 0;
                const coffees = await coffeeDataMapper.getAll(limit, offset);
                res.render('coffee/catalog', { coffees, origins, coffeeTypes, selectedCountry, selectedCoffeeType, limit, offset });
            }
        } catch (error) {
            console.error(error);
            res.status(500).render('error/500');
        }
    },

    async getPaginatedCatalog (req, res) {
        try {
            const limit = Number(req.query.limit) || 6;
            const offset = Number(req.query.offset) || 0;

            const newCoffees = await coffeeDataMapper.getAll(limit, offset);

            res.json(newCoffees);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Impossible de charger plus de cafés pour le moment' });
        }
    },

    async coffeeDetails(req, res) {
        try {
            const coffeeId = Number(req.params.id);
            const coffee = await coffeeDataMapper.getById(coffeeId);
            if (!coffee) {
                res.status(404).render('error/404');
                return;
            }
            res.render('coffee/details', { coffee });
        } catch (error) {
            console.error(error);
            res.status(500).render('error/500');
        }
    },

}

export default coffeeController;