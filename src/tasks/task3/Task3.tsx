import React, { useState } from 'react'
import { useDebounceEffect } from './hooks/useDebounceEffect';

export const Task3 = () => {
    const [count, setCount] = useState(0);
    const [computedCount, setComputedCount] = useState(0);

    useDebounceEffect(() => {
        // any staff right here the problem is that it's not debounced
        const myComplexFunction = () => {
            const computedCount = Math.pow(count, 3) + Math.sqrt(count) + Math.sin(count);

            setComputedCount(computedCount);
        }

        myComplexFunction();
    }, 1000, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {computedCount}
        </div>
    )
}
