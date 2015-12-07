'use strict';

export class <%= classedName %>Factory {
  public meaningOfLife : number;
  constructor () {
    this.meaningOfLife = 42;
  }

  getMeaningOfLife() {
    return this.meaningOfLife;
  }
}
