import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Input, Button } from '../components'
import firebase from 'firebase'


const App: FC = (props) => {
    const [name, setName] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)


    const signup = async () => {
        if (name && email && password) {
            try {
                const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
                if (user) {
                    await firebase.firestore().collection('users').doc(user.uid).set({ name, email, password })
                }
            } catch (error) {
                console.log(error)
            }

        } else {
            Alert.alert('Missing field!')
        }
    }


    return <View style={styles.container}>
        <Text>Sign Up Screen</Text>
        <Input placeHolder='Name' onChangeText={text => setName(text)} />
        <Input placeHolder='Email' onChangeText={text => setEmail(text)} />
        <Input placeHolder='Password' secureTextEntry onChangeText={text => setPassword(text)} />
        <Button title='Sign Up' onPress={signup} />
        <View style={styles.loginText}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                <Text style={{ color: 'blue', marginHorizontal: 5 }}>Login Here</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        flexDirection: 'row'
    }
})

