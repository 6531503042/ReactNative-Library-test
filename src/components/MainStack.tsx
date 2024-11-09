import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";
import { ScreenThree } from "./ScreenThree";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="One"
            screenOptions={{
                headerShown: false
            }}
        >
            <StackNavigator.Screen
                name="One"
                component={ScreenOne}
            />
            <StackNavigator.Screen
                name="Two"
                component={ScreenTwo}
            />
            <StackNavigator.Screen
                name="Three"
                component={ScreenThree}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);