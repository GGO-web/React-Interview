import { Dispatch, SetStateAction } from "react";

import { createContext } from "react";

interface ContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
  }

export const Context = createContext<ContextType>({
    theme: "theme",
    setTheme: () => {}
});
  