import React from 'react'

// TODO: Why it's re-rendering?
export const Component2 = () => {
    console.log("Expensive component render!");
    return (
        <div>Expensive component</div>
    )
}
