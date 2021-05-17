import React, { FC, useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Input } from '../components'
import firebase from 'firebase'



const App: FC = (props) => {
    const [message, setMessage] = useState<string | null>(null)
    const [user, setUser] = useState<any>(null)

    const signout = () => {
        firebase.auth().signOut()
    }
    const fetchCurrentUser = async () => {
        const uid = firebase.auth().currentUser?.uid
        const user = await firebase.firestore().collection('users').doc(uid).get()
        setUser({ id: user.id, ...user.data() })
    }
    useEffect = (() => {
        fetchCurrentUser()
    }, [])

    const post = async () => {
        if (message) {
            const data = {
                message,
                timeStamp: Date.now(),
                approved: false
            }
            try {
                await firebase.firestore().collection('posts').add(data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Input placeHolder='Message' onChangeText={text => setMessage(text)} />
        <Button title='Post' onPress={post} />
        <Button title='Sign Out' onPress={signout} />
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

