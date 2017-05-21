const typeDefinitions = `
# Insurance partner
type Partner {
  partnerNumber: Int
  firstname: String!
  lastname: String!
  birthday: String
  sex: String
  contracts: [Contract]
  # causerOf: [Claims]
}

# Insurance contract
type Contract {
  policeNumber: Int
  product: String!
  riskObjects: [String]
  insuree: Partner!
  claims: Claims
}

# Insurance claims
type Claims {
  claimsNumber: Int
  description: String
  claimsSum: Int
  claimsDate: String
  state: String
}
type Query {
  partner(firstname: String, lastname: String): Partner
  contract(product: String): Contract
  claims(description: String): Claims
}
schema {
  query: Query
}
`;

export default [typeDefinitions];