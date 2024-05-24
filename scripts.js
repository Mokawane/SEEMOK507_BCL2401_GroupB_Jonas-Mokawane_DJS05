import { subscribe, update, getState } from "./store.js";
import { increase, decrease, reset } from "./actions.js";

const handler = (prev, next) => console.log('Previous:', prev, 'Next:', next);
const unsubscribe = subscribe(handler);

console.log('Initial State:', getState());

update(increase);
update(increase);
console.log('After Increments:', getState());

update(decrease);
console.log('After Decrement:', getState());

update(reset);
console.log('After Reset:', getState());
