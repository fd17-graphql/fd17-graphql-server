import { Partner } from './fd17-connectors';
import { Contract } from './fd17-connectors';
import { Claims } from './fd17-connectors';

const resolvers = {
  Query: {
    partners(_, args) {
      return Partner.findAll({ where: args });
    },
    contracts(_, args) {
      return Contract.findAll({ where: args });
    },
    claims(_, args) {
      return Claims.findAll({ where: args });
    },
  },
  Partner: {
    contracts(partner) {
      return partner.getContracts();
    },
    claims(partner) {
      return partner.getClaims();
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
  Claims: {
    causer(claims) {
      return claims.getPartner();
    },
  },
};

export default resolvers;