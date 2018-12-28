export class Participant {
    private static index = 0

    private id: string

    constructor(private name: string) {
        this.id = String(Participant.index)
        Participant.index++
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }
}
