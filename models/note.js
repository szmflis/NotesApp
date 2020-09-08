const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    date: Date,
    dueDate: {
        type: Date,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

noteSchema.set('toJSON', {
    transform: (doc, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)
