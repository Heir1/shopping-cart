import React, {Component} from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
// import data from "./data.json";
import store from "./store";
import {Provider} from "react-redux";



class App extends Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         // products: data.products,
    //         // make cart persistance even if refreshing
    //         cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    //         // size: "",
    //         // sort: "",
    //     };

    //     console.log(this.state.cartItems)
    // }


// No remove from cart any more

    // removeFromCart = (product) => {
    //     const cartItems = this.state.cartItems.slice();
    //     this.setState({
    //         cartItems: cartItems.filter((x) => x._id !== product._id),
    //     });
    //     // make cart persistance even if refreshing
    //     localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id)));
    // };

// No addTocart cart any more

    // addToCart = (product) => {
    //     const cartItems = this.state.cartItems.slice();
    //     let alreadyInCart = false;
    //     cartItems.forEach((item) => {
    //         if(item._id === product._id){
    //             item.count++;
    //             alreadyInCart = true;
    //         }
    //     });
    //     if(!alreadyInCart){
    //         cartItems.push({...product, count: 1});
    //     }
    //     this.setState({ cartItems });
    //     // make cart persistance even if refreshing
    //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // };

    // createOrder = (order) => {
    //     alert("Need to save "+order.name+" "+order.email+" and "+order.address);
    // }

// No sortProducts function anymore

    // sortProducts = (event) => {
    //     // impl
    //     const sort = event.target.value;
    //     console.log(event.target.value);

    //     this.setState({
    //         sort:sort,
    //         products : this.state.products.slice().sort((a,b) =>(
    //             sort === "lowest"
    //                 ? a.price > b.price
    //                     ? 1 
    //                     :-1 
    //                 : sort === "highest"
    //                 ? a.price < b.price
    //                   ? 1 
    //                   :-1
    //                 : a._id > b._id /* 01:25:28 */
    //                 ? 1
    //                 :-1
    //         ))
    //     })
    // }
 
// No filter product action any more

    // filterProducts = (event) => {
    //     // impl
    //     console.log(event.target.value);
    //     if(event.target.value === ""){
    //         this.setState({ size: event.target.value, products: data.products})
    //     } else {
    //         this.setState({ 
    //           size: event.target.value,
    //           products: data.products.filter(
    //               (product) => product.availableSizes.indexOf(event.target.value) >= 0
    //           ),
    //         });
    //     }
    // }

    render(){
        return(
            <Provider store={store}>
                <div className="grid-container">
                    <header>
                        <a href="/">React Shopping Cart</a>
                    </header>
                    <main>
                        <div className="content">
                            <div className="main">

                                <Filter
                                    // count = {this.state.products.length} 
                                    // size={this.state.size}
                                    // sort={this.state.sort}
                                    // filterProducts={this.filterProducts}
                                    // sortProducts={this.sortProducts}
                                />
                                {/* n more thi line of code : products={this.state.products} */}
                                <Products  
                                    // products={this.state.products} addToCart={this.addToCart} 
                                />
                            </div>
                            <div className="sidebar">
                                <Cart 
                                    // createOrder = {this.createOrder}
                                    // cartItems = {this.state.cartItems} 
                                    // removeFromCart = {this.removeFromCart}
                                />
                            </div>
                        </div>
                    </main>
                    <footer>
                        All right reserved
                    </footer>
                </div>
            </Provider>
        );
    }
}

export default App;