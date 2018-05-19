import { observable, action } from "mobx";
import axios from "axios";

import { request } from '../utils/http';

export default class Currency {
  @observable currencies;
  @observable activeCurrency;

  constructor() {
    this.currencies = [];
    this.activeCurrency = null;
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

  @action setData(data) {
    this.currencies = data;
    this.activeCurrency = data[0].type;
  }

  @action setActiveCurrency(currency) {
    this.activeCurrency = currency;
  }

  @action clearItems() {
    this.currencies = [];
    this.activeCurrency = null;
  }
}
