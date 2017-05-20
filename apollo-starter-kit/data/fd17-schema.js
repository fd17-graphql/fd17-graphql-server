const typeDefinitions = `
type Partner {
  partnerNumber: Int!
  firstname: String!
  lastname: String!
  birthday: String!
  sex: String!
  contracts: [Contract]
  causerOf: [Claims]
}
type Contract {
  policeNumber: Int!
  product: String!
  riskObjects: [String]
  insuree: Partner!
  claims: Claims
}
type Claims {
  claimsNumber: Int!
  description: String
  claimsSum: Int!
  claimsDate: String!
  state: String!
}
type Query {
  partner(firstname: String, lastname: String): Partner
}
schema {
  query: Query
}
`;

export default [typeDefinitions];