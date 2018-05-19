import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject('store')
@observer
export default class Send extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;

		// bind event callback
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
	}

	componentDidMount() {
    this.store.currency.fetchCurrencies();
  }

  handleAmountChange({ target: { value: amount }}) {
	  amount && this.store.fee.fetchFee({
      currency: this.store.currency.activeCurrency,
      amount: +amount,
    });
  }

  handleCurrencyChange({ target: { value: currency }}) {
    this.store.fee.value && this.store.fee.fetchFee({
      currency,
      amount: this.store.fee.value,
    });
  }

  handleSubmit(event) {
  }

	render() {
		return (
			<div className="page home">
				<main>
					<div>
						<h3>SEND</h3>

            <form>
							<div style={{marginBottom: 10}}>
                <label>
                  Amount:
                  <input type="text" name="name" onChange={this.handleAmountChange} />
                </label>
							</div>

							<div style={{marginBottom: 10}}>
                <label>
                  Currency:
                  <select onChange={this.handleCurrencyChange}>
                    {
                      this.store.currency.currencies.map(
                        (curr, i) => (<option value={curr.type} key={i}>{curr.label}</option>)
                      )
                    }
                  </select>
                </label>
							</div>

							<div style={{marginBottom: 10}}>
                <label>
                  Fee: <span>{this.store.fee.value }</span>
                </label>
							</div>

              <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
						</form>

					</div>
				</main>
			</div>
		);
	}
}
