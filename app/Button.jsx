import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Button = ({name}) => {
  return (
    <Pressable style={{marginTop: 20, backgroundColor: '#222', paddingHorizontal: 10, paddingVertical: 15, borderRadius: 5, width: '40%'}}>
        <Text style={styles.sub_header_text}>{name}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    sub_header_text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 500,
        textAlign: 'center'
    },
    
})