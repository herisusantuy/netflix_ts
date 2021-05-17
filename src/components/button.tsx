import React, { FC } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const { height, width } = Dimensions.get('screen')


interface Props {
    title: string;
    onPress: () => void;
}


const App: FC<Props> = (props) => {
    return <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
}


export default App

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    text: {
        color: '#fff'
    }
})