import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HelloScreen = () => {
  return (
    <View style={styles.root}>
      {/*
        ### レッスン1: 表示している文字を変えてみよう ###
        1. "Hello Expo!!!"の文字を好きなテキストに変えてみよう。
      */}
      <Text style={styles.message}>Hello Expo!!!</Text>
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

export default HelloScreen
