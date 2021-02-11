import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UserScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.message}>UserScreen</Text>
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
  },
})

export default UserScreen
