import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Input, Button } from '../components'
import firebase from 'firebase'


const App: FC = () => {
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const login = async () => {
        if (email && password) {
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
        } else {
            Alert.alert('Missing field.')
        }
    }
    return <View style={styles.container}>
        <Text>Login Screen</Text>
        <Input placeHolder='Email' onChangeText={text => setEmail(text)} />
        <Input placeHolder='Password' secureTextEntry onChangeText={text => setPassword(text)} />
        <Button title='Login' onPress={login} />
    </View>
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

