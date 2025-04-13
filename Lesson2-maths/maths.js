//BAsic maths can do on console
// +,-,/,* calledoperators


2+2   //output is 4
10-3  //output is 7
10/2  //output is 5
5*3   //output is 15

2+3+2   //output is 7
2.2+5.4 //output is 7.6

/*
order of operations - follow BODMAS rule
📌 B → Brackets (Parentheses: (), {}, [])
📌 O → Orders (Exponents: **)
📌 D → Division (/)
📌 M → Multiplication (*)
📌 A → Addition (+)
📌 S → Subtraction (-)
*/

1+1*3  //output is 4
(1+1)*3  //output is 6


//ON console add to cart items suppose 1is backetball 2 is toaster

20.95+18.99*2  //output is 58.9299999 can see on web page count is also same

//count 10%tax 10% = 10/100 = 0.1 
58.93*0.1  //op is 5.893

//else can do
(20.95+18.99*2)*0.1  //op is 5.893


//float calculate
0.1+0.2 //op is 0.30000000000000004


//calculate money on round figure add to cart items suppose 1is backetball(20.95$) 1 is tshirt(7.99)
20.95+7.99 //op is 28.939999999999998

//instead use cents calculations then convert to dollars
(2095 + 799)/100  //op is 28.94



//how to round nums in js
Math.round(2.2)  //op is 2
Math.round(2.8)   //op is 3

(2095+799)*0.1 //289.40000000000003
((2095+799)*0.1)/100 //2.894
Math.round((2095+799)*0.1)/100 //2.89 more accurate use in money calculations

