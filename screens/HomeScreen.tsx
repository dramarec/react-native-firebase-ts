import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import FirebaseUtil from '../utils/FirebaseUtil';

const HomeScreen = () => {
    const signOut = () => {
        FirebaseUtil.signOut().catch(e => {
            console.log(e);
            alert('Something went wrong')
        })
    };
    return (
        <View style={styles.container} >
            <Text>Home</Text>
            <Button title='Logout' onPress={() => signOut()} />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgba(93, 37, 85, 0.699)',
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        padding: 20,
    },
})
