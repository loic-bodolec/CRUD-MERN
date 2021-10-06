const mongoose = require('mongoose');
const { Schema } = mongoose;

// Defining your schema
// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const postSchema = new Schema({
    author: String, // String is shorthand for {type: String}
    title: String,
    article: String,
}, { timestamps: true });

// Creating a model
// To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const Post = mongoose.model('post', postSchema);

module.exports = Post;