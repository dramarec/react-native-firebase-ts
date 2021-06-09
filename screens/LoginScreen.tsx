import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import FirebaseUtil from '../utils/FirebaseUtil';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //sign in or sign up

    const [create, setCreate] = useState(false);

    const signIn = () => {
        FirebaseUtil.signIn(email, password).catch(e => {
            console.log(e);
            alert('Email/ password is wrong')
        })
    }
    const signUp = () => {
        FirebaseUtil.signUp(email, password).catch(e => {
            console.log(e);
            alert('Something went wrong')
        })
    }

    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <TextInput
                placeholder='email'
                onChangeText={setEmail}
                value={email}
                style={styles.textInput}
            />
            <TextInput
                placeholder='password'
                onChangeText={setPassword}
                value={password}
                style={styles.textInput}
                secureTextEntry={true}
            />
            {create ? (
                <>
                    <Button title='Sign in' onPress={() => signUp()} />
                    <Text style={styles.text} onPress={() => setCreate(false)}>Sign In</Text>

                </>
            ) : (
                <>
                    <Button title='Sign in' onPress={() => signIn()} />
                    <Text style={styles.text} onPress={() => setCreate(true)}>Create an Account</Text>
                </>
            )}
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgba(93, 37, 85, 0.699)',
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        padding: 20,
    },
    textInput: {
        borderWidth: 1,
        // borderColor: '#e6e6e6',
        borderColor: '#FBA928',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    text: {
        color: '#38a4fc'
    }
})
