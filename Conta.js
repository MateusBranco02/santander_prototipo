export class Conta {
  get saldo() {
    return this._saldo;
  }

  constructor(saldo) {
    this._saldo = saldo;
  }

  sacar(valorSaque) {
    if (valorSaque <= this._saldo.toFixed(2)) {
      const multa = this._saldo * 0.025;
      this._saldo = this._saldo - valorSaque - multa;
      return this._saldo;
    } else {
      return this._saldo;
    }
  }

  depositar(valorDeposito) {
    const bonus = valorDeposito * 0.01;

    this._saldo += valorDeposito + bonus;
    return this._saldo;
  }
}
