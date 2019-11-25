1. What problem does the context API help solve?

The Context API helps with streamlining State Management in small React applications by divesting one of the need to "prop
drill" whereby one is passing down stateful data from various HOC's to reach the desired component. Context allows stateful
data to be grouped "contextually" and accessed where it is needed without the need for intermediary components.
 
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 
'single source of truth' in a redux application?

Actions are sent to reducers and describes the kind of functional action a reducer needs to take on its state tree in order to keep it up to date with user interaction,
as well as the data needed to do it. Reducers group the logical operations an application may take on its state data and are contained in the Redux "store" when using 
that library. The store is where Redux keeps its state tree and its reducers, data is passed here in one-direction and used to manipulated said state data. The Redux store 
is known as the single source of truth because it is the only location where all state data is stored and manipulated.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to the state of the application as a whole. Component state refers to the state of specific pieces of an application. Application state is 
desirable when managing stateful data that is useful to many pieces of the application. Component state is useful for data manipulation specific to the component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?'

Redux Thunk allows Redux action creators to be used asynchronously. In this manner we can make API calls and preform other actions that require asychronous functionality 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux for sure its the whole package, its flow is managable, and it is scalable.
