import { Partner } from './fd17-connectors';
import { Contract } from './fd17-connectors';
import { Claims } from './fd17-connectors';

const resolvers = {
  Query: {
    partner(_, args) {
      return Partner.find({ where: args });
    },
    contract(_, args) {
      return Contract.find({ where: args });
    },
    claims(_, args) {
      return Claims.find({ where: args });
    },
  },
  Partner: {
    contracts(partner) {
      return partner.getContracts();
    },
  },
  Contract: {
    insuree(contract) {
      return contract.getPartner();
    },
    claims(contract) {
      return contract.getClaims();
    },
  },
};

export default resolvers;