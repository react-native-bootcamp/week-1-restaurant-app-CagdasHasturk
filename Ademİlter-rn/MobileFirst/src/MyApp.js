import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchView from './views/Search';
import HistoryView from './views/History';
import FavoriteView from './views/Favorite';
import DetailsView from './views/Details';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SearchStack() {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchView} />
        <Stack.Screen name="Details" component={DetailsView} />
    </Stack.Navigator>
    )
}


export default function MyApp() {
    return (
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Search">
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
    )
}

