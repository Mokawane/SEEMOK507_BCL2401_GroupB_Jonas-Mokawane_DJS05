// Import necessary functions from the store and actions modules
import { subscribe, update, getState } from "./store.js";
import { increase, decrease, reset } from "./actions.js";

/**
 * Define a handler function to log state changes
 * The handler takes two arguments: the previous state and the next state
 */
const handler = (prev, next) => console.log('Previous:', prev, 'Next:', next);

/**
 * Subscribe to the store with the handler to listen for state changes
 * The subscribe function returns an unsubscribe function
 */
const unsubscribe = subscribe(handler);

// Log the initial state of the store
console.log('Initial State:', getState());

// Update the state by dispatching the increase action
update(increase);
update(increase);

// Log the state after increment actions
console.log('After Increments:', getState());

// Update the state by dispatching the decrease action
update(decrease);

// Log the state after the decrement action
console.log('After Decrement:', getState());

// Update the state by dispatching the reset action
update(reset);
// Unsubscribe from the store if no longer needed
console.log('After Reset:', getState());
