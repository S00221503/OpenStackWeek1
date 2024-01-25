import {getCurrencies} from './getCurrencies';

describe ('getCurrencies', () => {
    it('should return an array with USD, GBP, and EUR', () => {
        const currencies = getCurrencies();
        expect(currencies).toEqual(jasmine.arrayContaining(['USD', 'GBP', 'EUR']));
});
});