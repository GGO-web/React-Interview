import React, { useState } from 'react'
import { Component1 } from './components/component1/Component1';
import { Component2 } from './components/component2/Component2';
import { Context } from './store/context';

export const Task1 = () => {
  const [theme, setTheme] = useState("theme")

  return (
    <Context.Provider value={{ theme, setTheme }}>
      <Component1 />
      <Component2 />
    </Context.Provider>
    
    // ZUSTAND EXAMPLE
    // <>
    //   <Component1 />
    //   <Component2 />
    // </>
  )
}
