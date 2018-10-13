const Book = require('mongoose').model('Book');
// const Book = mongoose.model('Book');

module.exports = {
  index(req, res) {
    Book.find({})
      .then(books => res.json(books))
      .catch(console.log('Error in index'));
  },
  create(req, res) {
    Book.create(req.body)
      .then(book => res.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key =>error.errors[key].message);
        res.status(500).json(errors);
      });
  },
  show(req, res) {
    Book.findById(req.params.book_id)
      .then(book => res.json(book))
      .catch(console.log('Error in show'));
  },
  update(req, res) {
    Book.findByIdAndUpdate(req.params.book_id, { $set: req.body }, { new: true })
      .then(book => res.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key =>error.errors[key].message);
        res.status(500).json(errors);
      });
  },
  destroy(req, res) {
    Book.findByIdAndRemove(req.params.book_id)
      .then(book => res.json(book))
      .catch(console.log('Error in delete'));
  }
};
