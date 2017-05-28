const typeDefinitions = `
# Insurance partner
type Partner {
  partnerNumber: String!
  firstname: String!
  lastname: String!
  birthday: String!
  sex: String!
  contracts: [Contract]
  claims: [Claims]
}

# Insurance contract
type Contract {
  policeNumber: String!
  product: String!
  riskObject: String!
  insuranceSum: String
  insuree: Partner!
  claims: [Claims]
}

# Insurance claims
type Claims {
  claimsNumber: String
  description: String
  claimsSum: String
  claimsDate: String
  state: String
  causer: Partner
}


type Query {
  partners(partnerNumber: String, firstname: String, lastname: String, birthday: String, sex: String): [Partner]
  contracts(policeNumber: String, product: String, riskObject: String, insuranceSum: String): [Contract]
  claims(claimsNumber: String, description: String,claimsSum: String, claimsDate: String, state: String): Claims
}


schema {
  query: Query
}
`;

export default [typeDefinitions];