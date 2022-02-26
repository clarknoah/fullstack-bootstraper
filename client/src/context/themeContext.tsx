import React, { createContext, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "styling";


export type ThemeType = {
  theme: string;
  toggleTheme: (value?: string) => undefined;
};


export const ThemeContext = createContext<ThemeType>(null!);


export const useTheme = () =>{
  return useContext(ThemeContext)
}

export type ThemeProviderProps = {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children
})=>{
  let [theme, setTheme] = React.useState<any>(import.meta.env.VITE_DEFAULT_THEME);

  const switchTheme = () =>{
    return theme === "light" ? "dark" : "light";
  }

  let toggleTheme = (value: string = switchTheme()) => {
      setTheme(value);
      return undefined;
  };


  let value = {theme, toggleTheme};

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
    );
}
