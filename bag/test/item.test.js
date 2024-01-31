/* eslint-disable import/extensions */
import Item from '../item.js';

describe('Item Tests', () => {
  it('Should has 3 filds: name, valuer and quantity', () => {
    const item = new Item('Beterraba', 2.5, 10);

    expect(item.name).toBe('Beterraba');
    expect(item.value).toBe(2.5);
    expect(item.quantity).toBe(10);
  });

  it('Should return correct price for the quantity', () => {
    const item = new Item('Batata', 0.1, 3);

    expect(item.getItemTotalValue()).toBeCloseTo(0.3);
  });
});
