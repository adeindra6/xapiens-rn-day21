import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  SplashScreen,
  Home1Screen,
  Home2Screen,
  Home3Screen,
  LoginScreen,
  SignUpScreen,
  WelcomeScreen,
  ProfileScreen,
  ProductScreen,
} from '@screens';
import store from '@redux/store';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {

  const {isLogin} = useSelector(state => {
    console.log({state});
    return{
      isLogin: state.global.isLogin,
    };
  });

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
            {isLogin ? (
            <>
            <Drawer.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{
                title: 'Welcome',
                headerStyle: {
                  backgroundColor: 'green',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Drawer.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: 'Profile',
                headerStyle: {
                  backgroundColor: 'green',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Drawer.Screen
              name="Product"
              component={ProductScreen}
              options={{
                title: 'Product All',
                headerStyle: {
                  backgroundColor: 'green',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            </>
            ) : (
            <>
            <Drawer.Screen
              name="Splash"
              component={SplashScreen}
              options={{
                title: 'Splash',
                headerStyle: {
                  backgroundColor: 'green',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Drawer.Screen
              name="Home1"
              component={Home1Screen}
              options={{
                title: 'Home 1',
                headerStyle: {
                  backgroundColor: 'green',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Drawer.Screen
              name="Home2"
              component={Home2Screen}
              options={{
                title: 'Home 2',
                headerStyle: {
                  backgroundColor: 'green',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Drawer.Screen
              name="Home3"
              component={Home3Screen}
              options={{
                title: 'Home 3',
                headerStyle: {
                  backgroundColor: 'green',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Drawer.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Login',
                headerStyle: {
                  backgroundColor: 'green',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Drawer.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                title: 'Sign Up',
                headerStyle: {
                  backgroundColor: 'green',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            </>)}
          </Drawer.Navigator>
        </NavigationContainer>
    </>
  );
};

const AppWrapper = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;