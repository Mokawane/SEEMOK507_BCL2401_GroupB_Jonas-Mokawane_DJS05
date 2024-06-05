export const increase = (state) => ({
    ... state,
    value: state.value + 1,
});

export const decrease = (state) => ({
    ... state,
    value: state.value - 1,
});

export const reset = (state) => ({
    ... state,
    value: 0,
});