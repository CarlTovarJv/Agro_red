import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'; 
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CssBaseline } from '@mui/material';

const AppMui = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}

export default AppMui;