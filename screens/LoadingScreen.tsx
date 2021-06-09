import React from 'react'
import { StyleSheet, ActivityIndicator, View } from 'react-native'

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color='#000' size='large' />
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgba(93, 37, 85, 0.699)',
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        padding: 20,
    },
})
