var mongoose = require('mongoose');
var mongodbURL = 'mongodb://digigyan:digigyan1234@ds131854.mlab.com:31854/digigyan';
var mongodbOptions = {};

// MongoDB connection
mongoose.connect(mongodbURL, mongodbOptions, function (err, res) {
    if (err) {
        console.log('Connection refused to ' + mongodbURL);
        console.log(err);
    } else {
        console.log('Connection successful to: ' + mongodbURL);
    }
});

// Instantiate Schema
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

// User schema
var User = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tag: { type: Array, required: true },
    questions: { type: Array, required: true }
});

//Questions Schema
var Questions = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: Array, required: true },
    answers: { type: Array, required: true }
});

//Answers Schema
var Answers = new Schema({
    questionid: { type: String, required: true },
    username: { type: String, required: true },
    like: { type: Number, required: true },
    description: { type: String, required: true },
});

// Define Models
var userModel = mongoose.model('User', User);
var questionsModel = mongoose.model('Questions', Questions);
var answersModel = mongoose.model('Answers', Answers);

// Export Models
exports.userModel = userModel;
exports.questionsModel = questionsModel;
exports.answersModel = answersModel;