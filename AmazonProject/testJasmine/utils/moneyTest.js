import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite:formatcurrency',()=>{
    it('convert cents into dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('check with zero',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('roundes up',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

})