import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MyScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.message}>mojamojayeah!!!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  message: {
    textAlign: 'center',
    fontSize: 100,
  },
})

export default MyScreen
