import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { MotiView } from 'moti';
import Button from '../Button'

const Explore = () => {
  return (
    <View style={styles.container}>
      <View
        style={styles.header_wrapper}
      >
        <MotiView
          from={{ opacity: 0, translateY: 50}}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 1000 }}
        >
          <Text style={styles.header_text}>Explore</Text>
        </MotiView>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={true}
        contentInsetAdjustmentBehavior="automatic"
        decelerationRate={0.998}
        scrollEventThrottle={16}
        overScrollMode="never"
        style={styles.body_wrapper}
      >
        <MotiView>
          <Text style={styles.sub_header_text}>Disover new places, rides and people. You can now schedule rides from where you are to where you want to go .</Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 50}}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'spring', duration: 1000 }}
        >
          <Text style={styles.body_header_text}>Events & Travel Suggestions </Text>
  
          <Image style={styles.image_wrapper} source={require('../../assets/images/explore/summer_concert.png')} />
  
          <Text style={styles.sub_header_text}>Summer Concert in the park this June</Text>
          <Text style={styles.sub_header_text}>15th June 2025, 7:00 PM</Text>
          
          <Button />

        </MotiView>

      </ScrollView>

    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_wrapper: {
    width: '100%',
    marginTop: 0,
    backgroundColor: '#222',
    height: 120,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#efefef',
  },
  header_text: {
    fontSize: 24,
    fontWeight: 500,
    color: '#fff',
    marginTop: 50
  },
  body_wrapper: {
    padding: 10,
    marginBottom: 20,
    flexgrow: 1
  },
  body_header_text: {
    fontSize: 22,
    fontWeight: 600,
    color: '#222',
    marginTop: 20
  },
  sub_header_text: {
    fontSize: 16,
    fontWeight: 400,
    color: '#333',
    marginTop: 5
  },
  image_wrapper: {
    width: '100%',
    height: 200,
    marginVertical: 15,
    borderRadius: 20
  }
})


