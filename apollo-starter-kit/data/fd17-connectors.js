// at the top with imports:
import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';


// ** Sequelize with Casual **
const db = new Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: './blog.sqlite',
});

const PartnerModel = db.define('partner', {
  firstname: { type: Sequelize.STRING },
  lastname: { type: Sequelize.STRING },
});

const ContractModel = db.define('contract', {
  product: { type: Sequelize.STRING },
});

const ClaimsModel = db.define('claims', {
  description: { type: Sequelize.STRING },
});

PartnerModel.hasMany(ContractModel);
ContractModel.belongsTo(PartnerModel);
ContractModel.hasMany(ClaimsModel);
ClaimsModel.belongsTo(ContractModel);


// create mock data with a seed, so we always get the same
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return PartnerModel.create({
      firstname: casual.first_name,
      lastname: casual.last_name,
    }).then((partner) => {
      return partner.createContract({
        product: `A contract by ${partner.firstname}. ` + casual.sentences(3),
      });
    });
//   return ClaimsModel.create({
//      description: casual.sentences(),
//    })
  });
});

const Partner = db.models.partner;
const Contract = db.models.contract;
const Claims = db.models.claims;
// ** END Sequelize with Casual **

export { Partner, Contract, Claims };