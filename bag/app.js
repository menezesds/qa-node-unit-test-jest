/* eslint-disable import/extensions */
import Bag from './bag.js';
import Item from './item.js';

const bag = new Bag();

bag.addItem(new Item('Maçã', 1, 3));
bag.addItem(new Item('Banana', 1.4, 5));
bag.addItem(new Item('Melancia', 2, 1));
bag.addItem(new Item('Uva', 4.3, 2));
bag.addItem(new Item('Açaí', 3, 5));

bag.addShipping(15);

bag.calculaSubtotal();

bag.order();

console.log(bag);
