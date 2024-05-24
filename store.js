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