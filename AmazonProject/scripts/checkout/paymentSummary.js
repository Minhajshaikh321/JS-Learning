import { cart } from "../../data/cart.js"
import { products,getProduct } from "../../data/products.js"
import {getDileveryOption} from '../../data/deliveryOptions.js'
import { formatCurrency } from "../utils/money.js";

/*
Steps calculate order of items:
1.Loop through the cart
2.For each product,price* quantity
3.Add everything together

Steps calculate order of shipping:
1.Loop through the cart
2.Add all the shipping cost together
*/


export function renderPaymentSummary(){
    let productPriceCents=0;
    let shippingPriceCents=0;
    let totalQuantity=0;
    cart.forEach((cartItem) => {
        console.log(cartItem.quantity);
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;
        totalQuantity+=cartItem.quantity;
        // console.log(cartItem.quantity);
        const deliveryOption= getDileveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;

    });


    const totalBeforeTaxCents=productPriceCents+shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;


    const paymentSummaryHTML=`
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (${totalQuantity}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">${formatCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary')
        .innerHTML = paymentSummaryHTML;

    document.querySelector('.js-checkout-header')
        .innerHTML=
        `
        Checkout (<a class="return-to-home-link"
            href="amazon.html">${totalQuantity} items</a>)

        `
    
}
