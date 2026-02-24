## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById is used to find element by using id

getElementsByClassName is used to find all element of this class

querySelector give first element using css selector

querySelectorAll give all matching elements

### 2. How do you create and insert a new element into the DOM?

const newDiv = document.createElement('div')
document.body.appendChild(newDiv)

### 3. What is Event Bubbling? And how does it work?

this is the defoult behaviour of javascript.
if any event occured in any element the event sprade to top parent element.

### 4. What is Event Delegation in JavaScript? Why is it useful?

using event delegation only add listener to parent element handle child elements.

it is useful for performance dynamic element handle and clean and maintainable code.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault turned off elements default behavour.

stopPropagation turned off event bubbling.

---
