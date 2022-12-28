import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { BottomTabNavigation } from './navigation';
import { PMThemeProvider } from './theme';
import { PMStatusBar } from './components/shared';
import { PMQueryProvider } from './api';

const App: FC = () => (
    <PMQueryProvider>
        <PMThemeProvider>
            <PMStatusBar />
            <NavigationContainer>
                <BottomTabNavigation />
            </NavigationContainer>
        </PMThemeProvider>
    </PMQueryProvider>
)

export default App;
