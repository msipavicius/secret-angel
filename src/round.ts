import { Participant } from './participant'

export type Pair<T> = [T, T]
export type Result = Array<Pair<Participant>>

export class Round {
    private result?: Result

    constructor(private participants: Participant[]) {}

    draw() {
        this.participants.forEach((p, i, arr) => {
            const presentToIndex = i !== arr.length - 1 ? i + 1 : 0
            if (!this.result) {
                this.result = []
            }
            this.result.push([p, arr[presentToIndex]])
        })
    }

    getResult() {
        return this.result
    }
}
