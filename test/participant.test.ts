import {Participant} from '../src/participant'

describe('Participant', () => {
    it('should get participant name', () => {
        const name = 'john smith'
        expect(new Participant(name).getName()).toEqual(name)
    })
})
