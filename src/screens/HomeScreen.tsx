import React, { useState, useCallback } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

const HomeScreen = () => {
  // ### レッスン3: ツイートする内容を入力できるようにしよう ###
  // 2. テキストボックスでの入力値をHooksで管理してみよう。
  const [text, setText] = useState<string>('')

  const onTweet = useCallback((text: string) => {
    console.info(`tweet: ${text}`)
  }, [])

  return (
    <View style={styles.root}>
      <View style={styles.actionBar}>
        {/* 
          ### レッスン4: ツイート内容をログに表示させてみよう ###
          1. ボタンを押した時に、"onTweet"を実行するようにしてみよう。
        */}
        <TouchableOpacity style={styles.tweetButton}>
          <Text style={styles.tweetButtonText}>ツイートする</Text>
        </TouchableOpacity>
      </View>

      {/*
        ### レッスン3: ツイートする内容を入力できるようにしよう ###
        1. TextInputコンポーネントを使い、テキストボックスを設置してみよう。
        styleは"input"を使おう。
      */}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
  },
  actionBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
  },
  tweetButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    padding: 12,
    borderRadius: 50,
    backgroundColor: 'rgb(29, 161, 242)',
  },
  tweetButtonText: {
    color: '#ffffff',
  },
  input: {
    height: 400,
    backgroundColor: '#f8f8f8',
    padding: 12,
  },
})

export default HomeScreen
