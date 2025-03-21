import { StyleSheet, View } from 'react-native'
import React from 'react'
import AddAddress  from './AddAddress'

const AddWork = () => {
  return (
    <View style={{flex: 1}}>
      <AddAddress header={"Workplace Address"}/>
    </View>
  )
}

export default AddWork

const styles = StyleSheet.create({})