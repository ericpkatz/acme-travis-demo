const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db');

const { expect } = require('chai');

describe('addition', ()=> {
  beforeEach(async()=> {
    await conn.sync({ force: true });
  });
  describe('1 + 1', ()=> {
    it('equals 2', ()=> {
      expect(1 + 1).to.equal(2);
    });
  });
});
