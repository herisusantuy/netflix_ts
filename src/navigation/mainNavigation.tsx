import React, { FC, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import firebase from 'firebase'
import AppStack from './appstack'
import AuthStack from './authstack'


const MainNav: FC = () => {
    const [user, setUser] = useState<any>(null)

    const bootStrap = () => {
        firebase.auth().onAuthStateChanged(usr => {
            if (usr) {
                setUser(usr)
            }
        })
    }

    useEffect(() => {
        bootStrap()
    }, [])
    return <NavigationContainer>
        {user !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
}



export default MainNav