const initialState = {
    value: 0,
};

/**
 * @typedef {object} State
 * @prop {number} value
 */

let currentState = initialState;

const getState = () => currentState;

/**
 * @callback Action 
 * @param {State} state 
 * @returns {State}
 */

/**
 * @callback Notify
 * @param {State} next
 * @param {State} prev
 */

/**
 * @type {Array<Notify>}
 */

let notifiers = [];

/**
 * @param {Action} action
 */
const update = (action) => {
    if(typeof action !== "function") {
        throw new Error('Action is required to be a function');
    }

    const prev = Object.freeze({... currentState });
    currentState = Object.freeze({ ... action(prev) });

    notifiers.forEach((notify) => notify(prev, currentState));
};