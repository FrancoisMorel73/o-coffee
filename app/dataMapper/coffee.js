import client from '../database.js';

const coffeeDataMapper = {
    async getAllFilteredByOriginAndType(country, coffeeType) {
        const result = await client.query(`
            SELECT
                coffee.id,
                coffee.name,
                coffee.description,
                coffee.reference,
                origin.country,
                coffee_type.name AS coffee_type
            FROM
                coffee
            JOIN
                origin ON coffee.origin_id = origin.id
            JOIN
                coffee_type ON coffee.coffee_type_id = coffee_type.id
            WHERE
                ($1::varchar IS NULL OR origin.country = $1)
            AND
                ($2::varchar IS NULL OR coffee_type.name = $2)
            ORDER BY
                coffee.id DESC;
        `, [country, coffeeType]);
        return result.rows;
    },

    async getNewest() {
        const result = await client.query(`
            SELECT
                coffee.id,
                coffee.name,
                coffee.description,
                coffee.reference,
                origin.country,
                coffee_type.name AS coffee_type
            FROM
                coffee
            JOIN
                origin ON coffee.origin_id = origin.id
            JOIN
                coffee_type ON coffee.coffee_type_id = coffee_type.id
            ORDER BY
                coffee.id DESC
            LIMIT 3;
        `);
        return result.rows;
    },

    async getById(id) {
        const result = await client.query(`
            SELECT
                coffee.id,
                coffee.name,
                coffee.description,
                coffee.reference,
                coffee.price_per_kg AS price,
                coffee.available,
                origin.country,
                coffee_type.name AS coffee_type
            FROM
                coffee
            JOIN
                origin ON coffee.origin_id = origin.id
            JOIN
                coffee_type ON coffee.coffee_type_id = coffee_type.id
            WHERE
                coffee.id = $1;
        `, [id]);
        return result.rows[0];
    },

};

export default coffeeDataMapper;