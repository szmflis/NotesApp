const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 205
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
    /*Changing _id field into id and deleting __v which the application doesnt need*/
    transform: (doc, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)

// const mongoose = require('mongoose')

// const noteSchema = new mongoose.Schema({
//   content: {
//     type: String,
//     required: true,
//     minlength: 5
//   },
//   date: Date,
//   important: Boolean,
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   }
// })

// noteSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

// module.exports = mongoose.model('Note', noteSchema)

