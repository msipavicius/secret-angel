import { Participant } from './participant'
import { Result, Round } from './round'

export class Game {
    private result?: Result

    constructor(private participants: Participant[]) {}

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
}
