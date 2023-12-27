# react_udemy

## Practice react by making react project in udemy lecture

### section 1~8
learning about basic of react and js grammar  
learning  about useState, React.createElement() (why we need to import React from 'react' before)   
learning about styled components  

### section 9
learning about debugging  
using react dev tools, and error message to fix bug  

### section 10
make projects using props, useState, eventHadler, Card component, Button component

### section 11
learning about Wrapper, React.fragment to reduce using <div>;  
learning about what is useRef, and how to use;  
learning about controled(using state)/uncontroled(using ref) component  

### section 12
learning about Side Effects, Reducers & Context    
useEffect execute after all other components re-loading when dependencies change    
learning how to use useEffect   

#### useState vs useReducer
useReducer can use when a complex state we use. useReducer is more powerful state management    
useState is using in main state and useful in symple update  
useReducer is using in related pieces of state/data or complex state updates  

#### context API
using context API when managing global state  
It is not suitable for use if it changes frequently. -> Redux is better way  
not use context API in everything  
  
#### Rules of Hooks
![Rules of Hooks](images/RoH.png)   

### section 13
practice to make react app  
how to use useReducer, useState, useEffect, useRef...  

### section 14
learn about How React work(virtual DOM <-> real DOM)  
if some state changing, always rendering all components. And change changed components in real DOM.
how to use React.memo()
React.memo : compare old props and new props, if changed the props then revaluated components. It only can use in functional components not class component.  
React need space that save the old props, and need to compare old props and new props. All it is cost.  
If rerendering, all const, function, etc... is created new. If raw value, it doesn't matter about using React.memo. But if function, new function that do same work isn't same function. So it can't use React.memo in function.  
learn about how to use useMemo.

### section 15
learn about what is class component  
no more using but it's important past project.   

### section 16
learn how to transmit http    
using Star Wars API    
learn about server response 2xx ~ 5xx  
using firebase to study get, post request using fetch  

### section 17
learn about custom hook    
custom hook must need to start name in 'use'; it give information to react that this is custom hook.    
using custom hook to fetch data  
using .bind() to avoid deep nesting  

### section 18
leran about how to make form validation 
learn about how to make input form using useState or customHooks