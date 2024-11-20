import coffeeDataMapper from "../dataMapper/coffee.js";
import originDataMapper from "../dataMapper/origin.js";
import coffeeTypeDataMapper from "../dataMapper/coffeeType.js";

const coffeeController = {
    async catalog(req, res) {
        try {
            // récupérer les paramètres de la requête pour le filtrage
            const selectedCountry = req.query.pays || null;
            const selectedCoffeeType = req.query.type || null;

            const coffees = await coffeeDataMapper.getAllFilteredByOriginAndType(selectedCountry, selectedCoffeeType);
            const origins = await originDataMapper.getAll();
            const coffeeTypes = await coffeeTypeDataMapper.getAll();

            res.render('coffee/catalog', { coffees, origins, coffeeTypes, selectedCountry, selectedCoffeeType });
        } catch (error) {
            console.error(error);
            res.status(500).render('error/500');
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