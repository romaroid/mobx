import { observable, action } from "mobx";
import { request } from '../utils/http';

export default class Fee {
  @observable value;

  async fetchFee(data = {}) {
    let { data: { fee: { value } } } = await request({
      query: `
        query rootQuery($currency: String, $amount: Float) {
          fee(currency: $currency, amount: $amount) {
            value
          }
        }
      `,
      variables: data,
    });
    this.setFee(value);
  }

  @action setFee(value) {
    this.value = value;
  }
}
