import * as express from 'express'
import { Game } from './game'
import { Participant } from './participant'

export const app = express()
const PORT = 3000

// temporary solution for storing the data
const gameStorage: Map<string, Game> = new Map()

app.post('/games', (req, res) => {
    if (!req.body.participants) {
        throw Error('Participants are required')
    }
    const participants = req.body.participants
        .map((name: string) => new Participant(name))
    const game = new Game(participants)
    gameStorage.set(game.getId(), game)
    res.send(game.getId())
})

app.get('/games/:id/play', (req, res) => {
    const game = gameStorage.get(req.params.id)
    if (!game) {
        throw Error(`Game with id "${req.params.id}" doesn't exist. Please provide existing id or create a new game.`)
    }
    game.play()
    res.send(game.getResult())
})

app.get('/', (req, res) => {
    res.send('Welcome to secret angel application API server!')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
