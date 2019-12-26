const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Note = require('../models/note')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users.map(user => user.toJSON()))
})

usersRouter.get('/populated', async (request, response) => {
    const users = await User.find({}).populate('notes')
    response.json(users.map(user => user.toJSON()))
})

usersRouter.get('/user/:id', async (request, response) => {
    const user = await User.findById(request.params.id)
    response.json(user.toJSON())
})

usersRouter.get('/user/:id/notes', async (request, response) => {
    const user = await User.findById(request.params.id).populate('notes')
    response.json(user.toJSON().notes)
})

usersRouter.get('/user/:id/notes-ids', async (request, response) => {
    const user = await User.findById(request.params.id)
    response.json(user.toJSON().notes)
})

usersRouter.post('/', async (request, response) => {
    try {
        const body = request.body
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            name: body.name,
            passwordHash
        })

        const savedUser = await user.save()
        response.json(savedUser.toJSON())
    } catch (ex) {
        console.log(ex.message)
    }
})

usersRouter.delete('/user/:id', async (request, response, next) => {
    const body = request.body
    const userToDelete = await User.findById(request.params.id)

    try {
        const correctPassword = userToDelete === null
            ? false
            : await bcrypt.compare(body.password, userToDelete.passwordHash)

        if (!(userToDelete && correctPassword)) {
            return response.status(401).json({
                error: 'Invalid user or password'
            })
        }

        for (let i = 0; i <= userToDelete.notes.length; i++) {
            await Note.findByIdAndDelete(userToDelete.notes[i])
        }

        await User.findByIdAndDelete(request.params.id)

        response.status(201).end()
    } catch (exception) {
        next(exception)
    }

})

module.exports = usersRouter