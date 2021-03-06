import React, { Component } from 'react';
import { connect } from "react-redux";
import {filterProducts, sortProducts} from "../actions/productActions"

class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts ? <div>Loading...</div> :
            <div className = "filter">
                <div className = "filter-result">
                {this.props.filteredProducts.length+" "} Product(s)</div>
                <div className = "filter-sort">
                    Order {" "}
                    <select value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                        <option value="latest">latest</option>
                        <option value="lowest">lowest</option>
                        <option value="highest">highest</option>
                    </select>
                </div>

                <div className = "filter-size">
                    Filter {" "}
                    <select value={this.props.size} onChange = {(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                        <option value="ALL">ALL</option>
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

export default connect((state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
}),
    {
        filterProducts,
        sortProducts
    }
)(Filter);