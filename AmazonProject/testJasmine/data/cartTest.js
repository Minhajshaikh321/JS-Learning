import {addToCart,cart,localFromStorage} from '../../data/cart.js';
import { products } from '../../data/products.js';

describe('test suite:addToCart',()=>{
    it('adds an existing product to cart',()=>{
        // addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        // expect(cart.length).toEqual(1);
        spyOn(localStorage,'setItem');

        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{
                    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity:1,
                    deliveryOptionId:'1'
                }]);
        });
        localFromStorage();
        // console.log(localStorage.getItem('cart'));
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);

    });


    it('adds a new product to cart',()=>{
        spyOn(localStorage,'setItem');

        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        console.log(localStorage.getItem('cart'));
        localFromStorage();
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);

    });

})