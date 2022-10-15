const Sequelize = require('sequelize');
const config = {};
if(process.env.QUIET){
  config.logging = false;
}
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db', config);

const User = conn.define('user', {
  name: Sequelize.STRING
});

const { expect } = require('chai');

describe('addition', ()=> {
  beforeEach(async()=> {
    await conn.sync({ force: true });
    await Promise.all([
      User.create({ name: 'moe'})
    ]);
  });
  describe('1 + 1', ()=> {
    it('equals 2', ()=> {
      expect(1 + 1).to.equal(2);
    });
  });
  describe('User', ()=> {
    it('findAll', async()=> {
      expect(await User.count()).to.equal(1);
    });
  });
});
