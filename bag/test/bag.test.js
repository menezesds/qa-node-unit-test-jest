/* eslint-disable import/extensions */
import Bag from '../bag.js';
import Item from '../item.js';

describe('Bag Tests', () => {
  it('Should start the bag empty', () => {
    const bag = new Bag();

    expect(bag.subtotal).toBe(null);
    expect(bag.shipping).toBe(null);
    expect(bag.total).toBe(null);
  });

  it('Should has item', () => {
    const item = new Item('Batata', 0.1, 3);
    const item2 = new Item('Maça', 0.5, 1);

    const bag = new Bag();
    bag.addItem(item);
    bag.addItem(item2);

    expect(typeof bag).toBe('object');
    expect(bag.itens[0]).toBe(item);
    expect(bag.itens[1]).toBe(item2);

    expect(bag.itens).toContain(item);
    expect(bag.itens).toContain(item2);
  });

  it('Should start with total atribute', () => {
    const bag = new Bag();

    expect(bag).toHaveProperty('total');
  });

  it('Should throw erro when try to make an order with empty bag', () => {
    function doOrder() {
      const bag = new Bag();
      bag.order();
    }

    expect(doOrder).toThrowError('Empty bag!');
  });

  it('Should add the shipping value', () => {
    const bag = new Bag();
    bag.addShipping(3.54);

    expect(bag.shipping).toBe(3.54);
  });

  it('Should calculate the order total', () => {
    const item = new Item('Batata', 2, 3);

    const bag = new Bag();
    bag.addItem(item);
    bag.addShipping(3);

    expect(bag.order()).toStrictEqual({
      shipping: 3,
      subtotal: 6,
      total: 9,
    });
  });
});
