const sql = require('mssql');

const sqlConfig = {
    user: 'SA',
    password: 'Password12',
    database: 'master',
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

describe("1 - Criou o Dockerfile e docker-compose corretamente", () => {
    test('É possível se conectar ao banco de dados e realizar consultas', async () => {
        await sql.connect(sqlConfig)
        const result = await sql.query`select 1`;
        expect(result).not.toBeNull();
    });
});
