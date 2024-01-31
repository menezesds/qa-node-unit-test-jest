/* eslint-disable import/extensions */
import { sumExtraHour, discountCalc } from '../index.js';

describe('Payment Sheet Calculation Tests', () => {
  it('Should return the sum of salary plus extra hours', () => {
    const expectValue = 2500;
    const result = sumExtraHour(2000, 500);
    expect(result).toBe(expectValue);
  });
      
  it('Should return the salary with discount value', () => {
    const expectValue = 2300;
    const result = discountCalc(2500, 200);
    expect(result).toBe(expectValue);
  });
});
