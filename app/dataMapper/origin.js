import client from '../database.js';

const originDataMapper = {
    async getAll() {
        const result = await client.query(`
            SELECT
                country
            FROM
                origin
            ORDER BY
                country ASC;
        `);
        return result.rows;
    },
};

export default originDataMapper;