import React, { FC } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const { height, width } = Dimensions.get('screen')

interface Props {
    placeHolder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;

}

const Input: FC<Props> = (props) => {
    return <View style={styles.container}>
        <TextInput style={styles.input} placeholder={props.placeHolder} onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry || false} />
    </View>
}

export default Input


const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        marginVertical: 5
    },
    input: {
        padding: 10
    }
})
