// at the top with imports:
import Mongoose from 'mongoose';

// where is my mongo?
const mongo = Mongoose.connect('mongodb://localhost/fd17');

const ContractSchema = Mongoose.Schema({
  policeNumber: Number,
  product: String
});

const Contract = Mongoose.model('contract', ContractSchema);


// modify the mock data creation to also create some views:
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return AuthorModel.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
    }).then((author) => {
      return author.createPost({
        title: `A post by ${author.firstName}`,
        text: casual.sentences(3),
      }).then((post) => { // <- the new part starts here
        // create some View mocks
        return View.update(
          { postId: post.id },
          { views: casual.integer(0, 100) },
          { upsert: true });
      });
    });
  });
});

// at the bottom, add objects to the exports
export { Partner, Contract, Claims };