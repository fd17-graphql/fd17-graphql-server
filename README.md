                O   OOOOOOO                                           OOOOO  O                                                       
OOOOOO OOOOO   OO   O    O         OOOO  OOOOO    OO   OOOOO  O    O O     O O              OOOO  OOOOOO OOOOO  O    O OOOOOO OOOOO  
O      O    O O O       O         O    O O    O  O  O  O    O O    O O     O O             O      O      O    O O    O O      O    O 
OOOOO  O    O   O      O    OOOOO O      O    O O    O O    O OOOOOO O     O O       OOOOO  OOOO  OOOOO  O    O O    O OOOOO  O    O 
O      O    O   O     O           O  OOO OOOOO  OOOOOO OOOOO  O    O O   O O O                  O O      OOOOO  O    O O      OOOOO  
O      O    O   O     O           O    O O   O  O    O O      O    O O    O  O             O    O O      O   O   O  O  O      O   O  
O      OOOOO  OOOOO   O            OOOO  O    O O    O O      O    O  OOOO O OOOOOOO        OOOO  OOOOOO O    O   OO   OOOOOO O    O 


## GRAPHQL Server with Apollo and NodeJS 
tutorial on https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035

## start Apollo server
cd fd17-graphql-server/apollo-starter-kit
npm start


## run GraphiQL (on Cloud9)
https://fd17-graphql-mikhailbro.c9users.io/graphql


## start MongoDB
cd fd17-graphql-server
./mongod

## mongodb cheatsheet
### MongoShell:
start with **mongo**
https://docs.mongodb.com/getting-started/shell/query/

### mongoimport
cd fd17-graphql-server
mongoimport --db fd17 --collection partner --file /db/insert-scripts/insert-fd17-partner.json


