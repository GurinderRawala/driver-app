import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { BottomTabNavigation } from './navigation';
import { PMThemeProvider } from './theme';
import { PMStatusBar } from './components/shared';
import { PMQueryProvider } from './api';
import { PMReduxProvider } from 'store';

const App: FC = () => (
    <PMReduxProvider>
        <PMQueryProvider>
            <PMThemeProvider>
                <PMStatusBar />
                <NavigationContainer>
                    <BottomTabNavigation />
                </NavigationContainer>
            </PMThemeProvider>
        </PMQueryProvider>
    </PMReduxProvider>
)

export default App;
