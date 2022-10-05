- make Schema of product :-
mongoose.Schema({})

- make Module of that product Schema :-
mongoose.model("Table name", created schema)

- Add product :-
Product.create(req.body)

- Get Products :-
Product.find()

- Update Products :-
Product.findByIdAndUpdate(req.params.id, req.body)

- Delete Product :-
Product.findById(req.params.id), 
product.remove()