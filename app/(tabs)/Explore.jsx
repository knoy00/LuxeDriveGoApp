import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { MotiView } from 'moti';
import Button from '../Button'
import Icon from 'react-native-vector-icons/FontAwesome';


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
        <MotiView
          from={{ opacity: 0, translateY: 100}}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 1000 , delay: 0}}
           
        >
          <Text style={styles.sub_header_text}>Disover new places, rides and people. You can now schedule rides from where you are to where you want to go .</Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 100}}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 1000 , delay: 200}}
          style={styles.events_section}
        >
          <Text style={styles.body_header_text}>Events and Activities </Text>
  
          <Image style={styles.image_wrapper} source={require('../../assets/images/explore/summer_concert.png')} />
  
          <Text style={styles.sub_header_text}>Summer Concerts In The Park</Text>
          <Text style={styles.sub_header_text}>Accra Sports Stadium, 15th June 2025</Text>
          
          <Button name={"Schedule ride"}/>

        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 100}}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 1000 , delay: 400}}
          style={styles.events_section}
        >
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={styles.body_header_text}>Eco-friendly Rides </Text>
            <Text style={{fontSize: 12, fontWeight: 600, color: '#fff', marginTop: 20, backgroundColor: '#ff5000', padding: 5, borderRadius: 5}}>New</Text>
          </View>
  
          <Image style={styles.image_wrapper} source={require('../../assets/images/explore/man_2.jpeg')} />
  
          <Text style={styles.sub_header_text}>Introducing our eco-friendly rides. This is part of our initiative to reduce carbon emissions. You can now explore your cities with minimal impact on nature</Text>
          <Text style={styles.sub_header_text}>Go Electric⚡ Go Green🍃</Text>
          
        </MotiView>

        

        <View style={styles.events_section}>
          <Text style={styles.body_header_text}>New App Features</Text>

          <View style={styles.card_wrapper}>
            <View style={styles.icon_wrapper}> 
              <Icon name='money' size={20} color='#fff'/>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 60}}>
              <Text style={{fontSize: 16, fontWeight: 500, color: '#fff'}}>LuxyCoin</Text>
              <Icon name="angle-right" color="#eee" size={25} />
            </View>
          </View>


          <View style={styles.card_wrapper}>
            <View style={styles.icon_wrapper}> 
              <Icon name='money' size={20} color='#fff'/>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 60}}>
              <Text style={{fontSize: 16, fontWeight: 500, color: '#fff'}}>LuxyCoin</Text>
              <Icon name="angle-right" color="#eee" size={25} />
            </View>
          </View>


          <View style={styles.card_wrapper}>
            <View style={styles.icon_wrapper}> 
              <Icon name='money' size={20} color='#fff'/>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 60}}>
              <Text style={{fontSize: 16, fontWeight: 500, color: '#fff'}}>LuxyCoin</Text>
              <Icon name="angle-right" color="#eee" size={25} />
            </View>
          </View>

          
          <View style={styles.card_wrapper}>
            <View style={styles.icon_wrapper}> 
              <Icon name='money' size={20} color='#fff'/>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 60}}>
              <Text style={{fontSize: 16, fontWeight: 500, color: '#fff'}}>LuxyCoin</Text>
              <Icon name="angle-right" color="#eee" size={25} />
            </View>
          </View>
          
        </View>



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
  body_wrapper: {
    padding: 10,
    marginBottom: 0,
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
    borderRadius: 20,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  events_section: {
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 0,
    paddingBottom: 10,
    paddingHorizontal: 5,
    width: '100%',

  },
  card_wrapper: {
    backgroundColor: '#41D188',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    height: '35%',
    width: '50%'
  },
  icon_wrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff50',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  }

})


