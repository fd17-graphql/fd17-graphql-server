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
  partnerNumber: { type: Sequelize.UUID, primaryKey: true },
  firstname: { type: Sequelize.STRING },
  lastname: { type: Sequelize.STRING },
  birthday: { type: Sequelize.DATE },
  sex: { type: Sequelize.STRING },
});

const ContractModel = db.define('contract', {
  policeNumber: { type: Sequelize.UUID, primaryKey: true },
  product: { type: Sequelize.STRING },
  riskObject: { type: Sequelize.STRING }, 
  insuranceSum: { type: Sequelize.STRING }, 
});

const ClaimsModel = db.define('claims', {
  claimsNumber: { type: Sequelize.UUID, primaryKey: true },
  description: { type: Sequelize.STRING },
  claimsSum: { type: Sequelize.STRING },
  claimsDate: { type: Sequelize.DATE },
  state: { type: Sequelize.STRING },
});

PartnerModel.hasMany(ContractModel);
ContractModel.belongsTo(PartnerModel);
PartnerModel.hasMany(ClaimsModel);
ClaimsModel.belongsTo(PartnerModel);


// create mock data with a seed, so we always get the same
casual.seed(123);
var dateFormat = 'YYYY-MM-DD';
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return PartnerModel.create({
      partnerNumber: casual.uuid,
      firstname: casual.first_name,
      lastname: casual.last_name,
      birthday: casual.date(dateFormat),
      sex: casual.random_element(['male', 'female']),
    }).then((partner) => {
      _.times(Math.floor((Math.random() * 5) + 1), () => {
          return partner.createContract({
          policeNumber: casual.uuid,
          product: `A contract by ${partner.firstname}. ` + casual.sentences(3),
          riskObject: casual.random_element(['house', 'car', 'bike', 'jewelry', 'art', 'little red pony']),
          insuranceSum: casual.random_element(['1000000', '250000', '500000', '100000', '200000', '350000', '2000000', '50000', '25000', '750000']),
          
        })
      })
    }).then((partner) => {
       _.times(Math.floor((Math.random() * 2) + 1), () => {
         return ClaimsModel.create({
         //return partner.createClaims({
          claimsNumber: casual.uuid,
          description: casual.sentences(3),
          claimsSum: casual.random_element(['10000000', '250000', '1000', '100000', '10000', '50000', '25000', '300000']),
          claimsDate: casual.date(dateFormat),
          state: casual.random_element(['reported', 'clearing', 'closed']),
        })
       })
    })

  });
});

const Partner = db.models.partner;
const Contract = db.models.contract;
const Claims = db.models.claims;
// ** END Sequelize with Casual **

export { Partner, Contract, Claims };