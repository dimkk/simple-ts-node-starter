import {expect} from 'chai'
import {usefulClass} from './usefulClass'

// https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6
describe('this is example test 2', () => {
    it('usefulClass shoud be created with name var and will return using getName method', () => {
        const uc = new usefulClass('testname')
        expect(uc.getName()).to.equal('testname')
    })
})