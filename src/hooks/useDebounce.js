import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    // console.log(debouncedValue);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [value]);

    return debouncedValue;
};

export default useDebounce;
