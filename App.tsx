import React, { FC } from 'react';
import { PMNavigation } from './navigation';
import { PMThemeProvider } from './theme';
import { PMStatusBar } from './components/shared';
import { PMQueryProvider } from './api';
import { PMReduxProvider } from 'store';

const App: FC = () => (
    <PMReduxProvider>
        <PMQueryProvider>
            <PMThemeProvider>
                <PMStatusBar />
                <PMNavigation />
            </PMThemeProvider>
        </PMQueryProvider>
    </PMReduxProvider>
)

export default App;
