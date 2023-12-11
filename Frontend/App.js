
import * as React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dashboard from './src/Dashboard';
import { Button } from 'react-native-paper';


const Stack = createNativeStackNavigator();

function Home({ navigation }) {

  return (
    <>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}  
      >
        {() => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Button 
                icon="sprout" 
                mode="elevated" 
                onPress={() => navigation.navigate('Dashboard', {plant: "garlic"})}
                style={{
                  backgroundColor: "white",
                  margin: 10
                }}
                theme={{
                  colors: {
                    primary: '#2E7D32'
                  },
                }}
                >
                Garlic
              </Button>

              <Button 
                icon="sprout" 
                mode="elevated" 
                onPress={() => navigation.navigate('Dashboard', {plant: "onion"})}
                style={{
                  backgroundColor: "white",
                  margin: 10
                }}
                theme={{
                  colors: {
                    primary: '#2E7D32'
                  },
                }}
                >
                Onion
              </Button>

          </View>
        )}
      </Stack.Screen>

      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
      />
    </Stack.Navigator>
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
        tabBarActiveTintColor: '#2E7D32',
      }}
    >
      <Tab.Screen
        name="Home"
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

  return (
    <>

    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </>
  );
}

