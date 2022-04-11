import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

import HomeScreen from './screens/HomeScreen'
import ActivateAccountScreen1 from './screens/ActivateAccountScreen1'
import ActivateAccountScreen2 from './screens/ActivateAccountScreen2'
import ActivatedAccountScreen from './screens/ActivatedAccountScreen'
import RecoverPasswordScreen from './screens/RecoverPasswordScreen'
import ChangePasswordScreen from './screens/ChangePasswordScreen'
import LandingPageScreen from './screens/LandingPageScreen'
import Reserve01 from './components/Reserve01'
import Reserve02 from './components/Reserve02'
import Reserve03 from './components/Reserve03'
import Reserve04 from './components/Reserve04'

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Home"}}>
      </Stack.Screen>
      <Stack.Screen name="ActivateAccountScreen1" component={ActivateAccountScreen1} options={{title: "Change Password"}}>
      </Stack.Screen>
      <Stack.Screen name="ActivateAccountScreen2" component={ActivateAccountScreen2} options={{title: "Personal Data"}}>
      </Stack.Screen>
      <Stack.Screen name="ActivatedAccountScreen" component={ActivatedAccountScreen} options={{title: "Activated Account"}}>
      </Stack.Screen>
      <Stack.Screen name="RecoverPasswordScreen" component={RecoverPasswordScreen} options={{title: "Recover Password"}}>
      </Stack.Screen>
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{title: "Change Password"}}>
      </Stack.Screen>
      <Stack.Screen name="LandingPageScreen" component={LandingPageScreen} options={{title: "Landing Page"}}>
      </Stack.Screen>
      <Stack.Screen name="Reserve01" component={Reserve01} options={{title: "Reserve01"}}>
      </Stack.Screen>
      <Stack.Screen name="Reserve02" component={Reserve02} options={{title: "Reserve02"}}>
      </Stack.Screen>
      <Stack.Screen name="Reserve03" component={Reserve03} options={{title: "Reserve03"}}>
      </Stack.Screen>
      <Stack.Screen name="Reserve04" component={Reserve04} options={{title: "Reserve04"}}>
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      < MyStack />
    </NavigationContainer>
  )
}