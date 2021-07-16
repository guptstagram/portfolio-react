export const animTimer = (timer,
    countState,
    currState, stateArr, setStateCall, contextString, nextText = "") => {
    if (countState.current < contextString.length) {
        countState.current += 1;
        timer = setTimeout(
            () => setStateCall([...stateArr, contextString[countState.current]]),
            80
        );
    } else {
        currState.current = nextText;
        countState.current = -1;
    }
};