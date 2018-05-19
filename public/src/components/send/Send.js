import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Send extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

  handleAmountChange(event) {
    console.log("handleAmountChange", event.target.value);
  }

  handleCurrencyChange(event) {
    console.log("handleCurrencyChange", event.target.value);
  }

  handleSubmit(event) {
  }

	render() {
		const store = this.store;

		debugger

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
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="CAD">CAD</option>
                  </select>
                </label>
							</div>

							<div style={{marginBottom: 10}}>
                <label>
                  Fee:
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
