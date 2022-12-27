import { useTheme, useThemeMode } from '@rneui/themed';
export const useToggleTheme = () =>{
    const { theme } = useTheme();
    const { setMode } = useThemeMode();

    const toggle = (mode: "dark" | "light") =>{
        setMode(mode);
    }

    return { toggle, theme };
}