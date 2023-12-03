
import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomePage from './src/Home';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';


function Home() {
  return (
    <>
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>        
      <HomePage/>
    </View>
    </>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#1976d2',
      }}
    >
      <Tab.Screen
        name="Garlic"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size*0.9} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  // const theme = {
  //   ...MD3LightTheme,
  //   colors: {
  //     ...MD3LightTheme.colors,
  //     myOwnProperty: true,
  //     "colors": {
  //       "primary": "rgb(71, 85, 182)",
  //       "onPrimary": "rgb(255, 255, 255)",
  //       "primaryContainer": "rgb(223, 224, 255)",
  //       "onPrimaryContainer": "rgb(0, 13, 95)",
  //       "secondary": "rgb(0, 95, 175)",
  //       "onSecondary": "rgb(255, 255, 255)",
  //       "secondaryContainer": "rgb(212, 227, 255)",
  //       "onSecondaryContainer": "rgb(0, 28, 58)",
  //       "tertiary": "rgb(56, 107, 1)",
  //       "onTertiary": "rgb(255, 255, 255)",
  //       "tertiaryContainer": "rgb(183, 244, 129)",
  //       "onTertiaryContainer": "rgb(13, 32, 0)",
  //       "onError": "rgb(255, 255, 255)",
  //       "errorContainer": "rgb(255, 218, 214)",
  //       "onErrorContainer": "rgb(65, 0, 2)",
  //       "background": "rgb(255, 251, 255)",
  //       "onBackground": "rgb(29, 27, 30)",
  //       "surface": "rgb(255, 251, 255)",
  //       "onSurface": "rgb(29, 27, 30)",
  //       "surfaceVariant": "rgb(233, 223, 235)",
  //       "onSurfaceVariant": "rgb(74, 69, 78)",
  //       "outline": "rgb(124, 117, 126)",
  //       "outlineVariant": "rgb(204, 196, 206)",
  //       "shadow": "rgb(0, 0, 0)",
  //       "scrim": "rgb(0, 0, 0)",
  //       "inverseSurface": "rgb(50, 47, 51)",
  //       "inverseOnSurface": "rgb(245, 239, 244)",
  //       "inversePrimary": "rgb(220, 184, 255)",
  //       "elevation": {
  //         "level0": "transparent",
  //         "level1": "rgb(248, 242, 251)",
  //         "level2": "rgb(244, 236, 248)",
  //         "level3": "rgb(240, 231, 246)",
  //         "level4": "rgb(239, 229, 245)",
  //         "level5": "rgb(236, 226, 243)"
  //       },
  //       "surfaceDisabled": "rgba(29, 27, 30, 0.12)",
  //       "onSurfaceDisabled": "rgba(29, 27, 30, 0.38)",
  //       "backdrop": "rgba(51, 47, 55, 0.4)"
  //     }
  //   } // Copy it from the color codes scheme and then use it here
  // };

  return (
    <>
    {/* <PaperProvider theme={theme}> */}
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    {/* </PaperProvider> */}
    </>
  );
}

