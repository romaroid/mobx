import { observable, action } from "mobx";
import axios from "axios";

export default class Currency {
  @observable currencies;
  @observable activeCurrency;

  constructor() {
    /**
     [
      {
       type: 'EUR',
       rate: 100
      },
      {
       type: 'USD',
       rate: 90
      },
      {
       type: 'CAD',
       rate: 80
      }
     ]
     */

    this.currencies = [];
    this.activeCurrency = {};
  }

  async fetchData() {
    // Currencies
    // TODO
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com${pathname}`
    );
    console.log(data);
    data.length && this.setData(data);
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
    this.items = data;
  }

  @action setActiveCurrency(data) {
    this.item = data;
  }

  @action clearItems() {
    this.items = [];
    this.item = {};
  }
}
