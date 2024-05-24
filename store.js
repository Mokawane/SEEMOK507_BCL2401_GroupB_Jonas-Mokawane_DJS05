/**
 * @typedef {object} State
 * @prop {number} value
 */

/**
 * @callback Notify
 * @param {State} next
 * @param {State} prev
 */

/**
 * @callback Action 
 * @param {State} state 
 * @returns {State}
 */

/**
 * @callback Update
 * @param {Action} action
 */

/**
 * @callback Subscribe
 * @param {Notify} notify
 */

/**
 * @callback GetState
 * @returns {State}
 */

const initialState = { 
    value: 0
};

/**
 * @type {State}
 */
let currentState = initialState;

/**
 * @type {Array<Notify>}
 */
let notifiers = [];

/**
 * @type {GetState}
 */

export const getState = () => currentState;

/**
 * @type {Update}
 * @param {Action} action
 */
export const update = (action) => {
    if(typeof action !== "function") {
        throw new Error('Action is required to be a function');
    }

    const prev = Object.freeze({... currentState });
    currentState = Object.freeze({ ... action(prev) });

    notifiers.forEach((notify) => notify(prev, currentState));
};

/**
 *@type {Subscribe}
 */
export const subscribe = (notify) => {
    notifiers.push(notify);

    const unsubscribe = () => {
        const handler = (current) => current !== notify;
        const result = notifiers.filter(handler);
        notifiers = result;
    };

    return unsubscribe;
};