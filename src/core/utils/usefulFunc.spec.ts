import {expect} from 'chai'
import usefulFunc from './usefulFunc'

// https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6
describe('this is example test', () => {
    it('usefulFunc shoud return ok in a promise or await way', async () => {
        const result = await usefulFunc()
        expect(result).to.equal('ok')
    })
})