export function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return { ...state, isExpanded: !state.isExpanded };
        case 'SET_WORD':
            return { ...state, word: action.payload };
        case 'GENERATE_SENTENCES':
            return {
                ...state,
                sentences: [
                    `I will ${state.word} some information to evaluate the potential.`,
                    `I'm currently, ${state.word}ing how to communicate.`,





                    `We ${state.word} abounding class, We use collaborate ${state.word} carr, We have got a family-acting carr, This makes me findings`,
                ],
            };
        default:
            throw new Error();
    }
}
