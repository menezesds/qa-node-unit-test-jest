class Bag {
  constructor() {
    this.itens = [];
    this.subtotal = null;
    this.shipping = null;
    this.total = null;
  }

  addItem(item) {
    this.itens.push(item);
  }

  addShipping(valor) {
    this.shipping = valor;
  }

  totaCalc() {
    this.subtotal = this.itens.reduce((acum, item) => acum + item.getItemTotalValue(), 0);
    return this.subtotal + this.shipping;
  }

  order() {
    if (this.itens.length === 0) {
      throw new Error('Empty bag!');
    }

    this.total = this.totaCalc();

    return {
      subtotal: this.subtotal,
      shipping: this.shipping,
      total: this.total,
    };
  }
}

export default Bag;
