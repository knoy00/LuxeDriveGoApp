import { StyleSheet, View } from 'react-native'
import React from 'react'
import AddAddress  from './AddAddress'

const AddHome = ({}) => {
  return (
    <View style={styles.container}>
      <AddAddress header={"Home Address"}/>
    </View>
  )
}

export default AddHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    
})