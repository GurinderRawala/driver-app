import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { BottomTabNavigation } from './navigation';

const App: FC = () => (
    <NavigationContainer>
        <BottomTabNavigation />
    </NavigationContainer>
)

export default App;
