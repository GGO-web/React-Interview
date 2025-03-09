import React, { useContext } from 'react'
import { Context } from '../../store/context';

export const Component1 = () => {
  console.log("Component1 render!");

  const { theme, setTheme } = useContext(Context);

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className='flex flex-col gap-10 items-center justify-center mb-10'>
      <div className='text-2xl font-bold mb-2 text-center'>My current theme is: {theme}</div>
      <button onClick={handleChangeTheme}>Change to dark theme</button>
    </div>
  )
}
