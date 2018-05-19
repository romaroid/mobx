import { observable, action, reaction } from "mobx";
import axios from "axios";

import { request } from '../utils/http';

export default class Currency {
  @observable loading;
  @observable currencies;
  @observable activeCurrency;

  constructor() {
    this.loading = false;
    this.currencies = [];
    this.activeCurrency = JSON.parse(window.localStorage.getItem('activeCurrency')) || null;

    // reactions
    reaction(
      () => this.loading,
      loading => loading ? this.fetchCurrencies() : null,
    );
    // reaction(
    //   () => this.currencies.length,
    //   length => length ? this.setActiveCurrency(this.currencies[1]) : null,
    // );
    reaction(
      () => this.activeCurrency,
      activeCurr => window.localStorage.setItem('activeCurrency', JSON.stringify(activeCurr)),
    )
  }

  async fetchCurrencies() {
    let { data: { currencies } } = await request({
      query: `
        query {
          currencies {
            id,
            type,
            label,
          }
        }
      `
    });
    currencies.length && this.setData(currencies);
  }

  async fetchCurrencyRate(list) {
    // TODO list of currency types
    // TODO
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com${pathname}`
    );
    console.log(data);
    data.length && this.setData(data);
  }

  @action fetch() {
    this.loading = true;
  }

  @action setData(data) {
    this.currencies = data;
  }

  @action setActiveCurrency(currency) {
    this.activeCurrency = currency;
  }

  @action clearItems() {
    this.activeCurrency = null;
  }
}
