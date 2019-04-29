export default (state = [], action) => {
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            const counters = [...state];
            const index = counters.indexOf(action.counter);
            counters[index] = {...action.counter};
            counters[index].value++;
            return [...counters];

        case 'DELETE_COUNTER':
            const filteredCounters = state.filter(c => c.id !== action.counterId);
            return [...filteredCounters]

        case 'RESET_COUNTER':
            const resetCounter = state.map(c => {
                c.value = 0;
                return c;
            });
            return [...resetCounter]

        default:
            return state;
    }
}
