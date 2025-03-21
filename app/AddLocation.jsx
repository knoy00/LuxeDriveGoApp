import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddAddress  from './AddAddress'


const AddLocation = () => {
  return (
    <View style={{flex: 1}}>
      <AddAddress header={"Location "} />
    </View>
  )
}

export default AddLocation

const styles = StyleSheet.create({})