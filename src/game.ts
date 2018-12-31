import { Participant } from './participant'
import { Result, Round } from './round'

export class Game {
    private static index = 0

    private result?: Result
    private id: string

    constructor(private participants: Participant[]) {
        this.id = String(Game.index)
        Game.index++
    }

    play() {
        const round = new Round(this.participants)
        round.draw()
        this.result = round.getResult()
    }

    getParticipants() {
        return this.participants
    }

    getResult() {
        return this.result
    }

    getId() {
        return this.id
    }
}
