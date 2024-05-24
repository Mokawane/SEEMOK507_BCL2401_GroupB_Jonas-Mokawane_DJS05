const increase = (state) => ({
    ... state,
    value: state.value + 1,
});

const decrease = (state) => ({
    ... state,
    value: -1,
});

const reset = (state) => ({
    ... state,
    value: 0,
});