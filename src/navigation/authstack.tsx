import React, { FC } from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { SignUp, Login } from "../screens";


const { Navigator, Screen } = createStackNavigator()



const AuthStack: FC = () => {
    return <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='SignUp' component={SignUp} />
        <Screen name='Login' component={Login} />

    </Navigator>
}


export default AuthStack