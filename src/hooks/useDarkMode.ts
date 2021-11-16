// Importing the hooks
import { useEffect, useState } from "react";
export default function useDarkMode() {
    // Set the state obtain of the local storage the value of the theme
    const [theme, setTheme]:any = useState(typeof window !== "undefined" ? localStorage.theme : "light");
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
        // Save the document in root const
        const root = window.document.documentElement;
        // Remove the class with value of colorTheme of the father class(first tag {<html></html>})
        root.classList.remove(colorTheme)
        // Add class with value of theme
        root.classList.add(theme);
        // Save the value in local storage
        localStorage.setItem('theme', theme)
    },[colorTheme, theme])
    // Return of the function for set state and the const colortheme value
    return [colorTheme, setTheme]
}
