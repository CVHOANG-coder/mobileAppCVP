import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
export type TMainStackParamList = {
  MAIN_TAB: undefined;
};
const MainStack = createNativeStackNavigator<TMainStackParamList>();
const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MAIN_TAB"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
