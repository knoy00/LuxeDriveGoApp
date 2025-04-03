import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { MotiView } from 'moti';


const Trips = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
            <View
              style={styles.header_wrapper}
            >
              <MotiView
                from={{ opacity: 0, translateY: 50}}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'timing', duration: 1000 }}
              >
                <Text style={styles.header_text}>Trips</Text>
              </MotiView>
            </View>
    </View>
  )
}

export default Trips

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_wrapper: {
    width: '100%',
    marginTop: 0,
    backgroundColor: '#111',
    height: 120,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#111',
  },
  header_text: {
    fontSize: 24,
    fontWeight: 500,
    color: '#fff',
    marginTop: 50
  },
})