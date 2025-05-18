import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts,loadProductsFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';

/*
async await is shortcut for promise and remove all extra code
async=make a function return a promise.
await=lets wait for promise to finish before going to next line.
*/

async function loadPage(){

    await loadProductsFetch();

    const value=await new Promise((resolve)=>{ //wait for finish after resolve go to next function
        loadCart(()=>{
            resolve('value 3');
        });
    });
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();

}

loadPage()



//promise keepor code flat and avoid to much nesting;

/*
Promise.all([  //let just run multiple promise on same time

    loadProductsFetch(), //use loadproductfetch which worh here as promise
    new Promise((resolve)=>{ //wait for finish after resolve go to next function
        loadCart(()=>{
            resolve();
        });
    })

]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
Promise.all([  //let just run multiple promise on same time

    new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value 1');  //shre the value to next func
        });
    }),
    new Promise((resolve)=>{ //wait for finish after resolve go to next function
        loadCart(()=>{
            resolve('value 2');
        });
    })

]).then((value)=>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
new Promise((resolve)=>{
    console.log('start promise 1');
    loadProducts(()=>{
        console.log('finish loading 1');
        resolve('value 1');  //shre the value to next func
    });
}).then((value)=>{
    console.log(value);
    return new Promise((resolve)=>{ //wait for finish after resolve go to next function
        console.log('start promise 2');
        loadCart(()=>{
            console.log('finish loading 2');
            resolve();
        });
    });
}).then(()=>{
        console.log('finish loading 1ast func');
        renderOrderSummary();
        renderPaymentSummary();

});
*/


/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/

