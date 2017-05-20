const resolvers = {
  Query: {
    partner(root, args){
      return { partnerNumber: 1, firstname: 'Max', lastname: 'von Dachs', birthday: '2000-01-01', sex: 'female' };
    },
  },
  Partner: {
    contracts(partner){
      return [
        { contractNumber: 1, product: 'A police', text: 'Some text', claims: 2},
        { contractNumber: 2, product: 'Another police', text: 'Some other text', claims: 200}
      ];
    },
    causerOf(claims){
      return [
        { claimsNumber: 1, description: 'A claims', claimsSum: 1234567, claimsDate: '2017-05-12', insuredPerson: 22},
        { claimsNumber: 2, description: 'Another claims', claimsSum: 2000, claimsDate: '2016-12-31', insuredPerson: 33}
      ];
    },
  },
  Contract: {
    insuree(contract) {
      return contract.getInsuree();
    },
    claims(contract) {
      return contract.findOne({ contractNumber: contract.contractNumber })
             .then((claims) => claims.claims);
    },
  },
};

export default resolvers;