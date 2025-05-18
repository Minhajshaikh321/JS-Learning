import { products } from "./products.js";

export let cart;

localFromStorage();

export function localFromStorage(){
  cart=JSON.parse(localStorage.getItem('cart'));
  if(!cart){
    cart=[

      //we just took product id not name price image this called normalizing data

      {
          productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity:2,
          deliveryOptionId:'1'
      },
      {
          productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity:1,
          deliveryOptionId:'2'

      },

    ];
  }
}


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem)=>{
      if(productId===cartItem.productId){
            matchingItem=cartItem;
      }
    });

    if (matchingItem){
      matchingItem.quantity+=1;
      console.log(`matching item ${matchingItem.quantity}`);
    }

    else{
      cart.push({
        productId:productId,
        quantity:1,
        deliveryOptionId:'1'
      });
      console.log(`cart qn ${cart.quantity}`);

    }
    saveToStorage();
}

// removecart steps 1.create new array
//       2.loop though cart
//       3.add each products to new array except for given productid
export function removeFromCart(productId){

    const newCart=[];

    cart.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });

    cart=newCart;
    saveToStorage();
} 

export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;

    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
            matchingItem = cartItem;
      }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();

}

export function loadCart(fun){
  const xhr= new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
    console.log(xhr.response);
    fun();
    });

  xhr.open('GET','https://supersimplebackend.dev/cart');
  xhr.send();
}