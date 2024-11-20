import coffeeDataMapper from "../dataMapper/coffee.js";

const mainController = {
    async home(req, res) {
        try {
            const coffees = await coffeeDataMapper.getNewest();
            res.render('main/home', { coffees });
        } catch (error) {
            console.error(error);
            res.status(500).render('error/500');
        }        
    },

    ourStore(req, res) {
        res.render('main/ourStore');
    },

}

export default mainController;