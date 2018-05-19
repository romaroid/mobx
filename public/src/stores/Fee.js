import { observable, action } from "mobx";
import axios from "axios";

export default class Fee {
  @observable fee;

  constructor() {
    this.currencies = 0;
  }

  async fetchFeeData() {
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

  @action setFeeData(data) {
    this.items = data;
  }
}
