const notesRouter = require('express').Router()
const Note = require('../models/note')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {
    getTokenFrom
} = require('./token-helper')

notesRouter.get('/', async (request, response) => {
    const notes = await Note.find({})
    response.json(notes.map(note => note.toJSON()))
})

notesRouter.get('/:id', async (request, response) => {
    const note = await Note.findById(request.params.id)
    response.json(note.toJSON())
})


notesRouter.delete('/:id', async (request, response, next) => {
    const token = getTokenFrom(request)
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)

        if (!token || !decodedToken.id) {
            return response.status(401).json({
                error: 'Token missing or invalid'
            })
        }

        const user = await User.findById(decodedToken.id)

        user.notes = user.notes.filter(note => note._id.toString().includes(request.params.id) === false)

        await Note.findByIdAndDelete(request.params.id)
        await user.save()
        response.status(204).end()

    } catch (exception) {
        next(exception)
    }
})

notesRouter.post('/', async (request, response, next) => {
    const body = request.body
    const token = getTokenFrom(request)

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)

        if (!token || !decodedToken.id) {
            return response.status(401).json({
                error: 'Token missing or invalid'
            })
        }

        const user = await User.findById(decodedToken.id)

        const note = new Note({
            content: body.content,
            date: new Date(),
            dueDate: Date.parse(body.dueDate) || null,
            user: user._id || null
        })

        const savedNote = await note.save()
        user.notes = user.notes.concat(savedNote._id)
        await user.save()
        response.json(savedNote.toJSON())
    } catch (exception) {
        next(exception)
    }
})

notesRouter.put('/:id', async (request, response, next) => {
    const body = request.body
    const token = getTokenFrom(request)

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)

        if (!token || !decodedToken.id) {
            return response.status(401).json({
                error: 'Token missing or invalid'
            })
        }

        const noteToBeEdited = await Note.findById(request.params.id)

        const note = {
            content: body.content || noteToBeEdited.content,
            dueDate: body.dueDate || noteToBeEdited.dueDate
        }

        const updatedNote = await Note.findByIdAndUpdate(request.params.id, note, {
            new: true
        })

        response.json(updatedNote.toJSON())
    } catch (exception) {
        next(exception)
    }
})

module.exports = notesRouter