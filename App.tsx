import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { BottomTabNavigation } from './navigation';
import { PMThemeProvider } from './theme';
import { PMStatusBar } from './components/shared';

const App: FC = () => (
    <PMThemeProvider>
        <PMStatusBar />
        <NavigationContainer>
            <BottomTabNavigation />
        </NavigationContainer>
    </PMThemeProvider>
)

export default App;
