import { createStore } from 'vuex';
import productModule from './module/product.js';
import cartModule from './module/cart.js';

const store = createStore({
    modules:{
        prods:productModule,
        cart: cartModule
    }
});

export default store