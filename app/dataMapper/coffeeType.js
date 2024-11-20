import client from '../database.js';

const coffeeTypeDataMapper = {
    async getAll() {
        const result = await client.query(`
            SELECT
                *
            FROM
                coffee_type
            ORDER BY
                name ASC;
        `);
        return result.rows;
    },
};

export default coffeeTypeDataMapper;