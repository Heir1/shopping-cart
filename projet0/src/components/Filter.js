import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className = "filter">
                <div className = "filter-result">
                {this.props.count+" "} Product(s)</div>
                <div className = "filter-sort">
                    Order {" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>latest</option>
                        <option>lowest</option>
                        <option>highest</option>
                    </select>
                </div>

                <div className = "filter-size">
                    Filter {" "}
                    <select value={this.props.size} onChange = {this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="X">X</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}
