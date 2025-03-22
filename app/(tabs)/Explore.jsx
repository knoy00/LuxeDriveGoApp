import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, {useState} from 'react'
import { MotiView } from 'moti';
import Button from '../Button'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Haptics from 'expo-haptics';


import ModalSheet from '../ModalSheet'


const Explore = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const [firstCard, setFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);
  const [thirdCard, setThirdCard] = useState(false);
  const [fourthCard, setFourthCard] = useState(false);

  const toggleModal = (card) => {
    if (modalVisible && card === activeCard) {
      setModalVisible(false);
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    setActiveCard(card);
    setModalVisible(true);
};


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
            <Text style={{fontSize: 12, fontWeight: 600, color: '#fff', marginTop: 20, backgroundColor: '#f50000', padding: 4, borderRadius: 5}}>New</Text>
          </View>
  
          <Image style={styles.image_wrapper} source={require('../../assets/images/explore/man_2.jpeg')} />
  
          <Text style={styles.sub_header_text}>Introducing our eco-friendly rides. This is part of our initiative to reduce carbon emissions. You can now explore your cities with minimal impact on nature</Text>
          <Text style={styles.sub_header_text}>Go Electric⚡ Go Green🍃</Text>
          
        </MotiView>

        <Text style={styles.body_header_text}>New App Features</Text>

        <View style={styles.new_section} >
          <Pressable style={[styles.card_wrapper, {backgroundColor: '#18DA8A'}]} onPress={() => toggleModal('firstCard')}>
            <View style={styles.icon_wrapper}> 
              <Icon name='money' size={20} color='#fff'/>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 60}}>
              <Text style={{fontSize: 16, fontWeight: 500, color: '#fff'}}>LuxyCoin</Text>
              <Icon name="angle-right" color="#eee" size={22} />
            </View>
          </Pressable>


          <Pressable style={[styles.card_wrapper, {backgroundColor: '#3A8DE1'}]} onPress={() => toggleModal('secondCard')}>
            <View style={styles.icon_wrapper}> 
              <Icon name='lock' size={20} color='#fff'/>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 60}}>
              <Text style={{fontSize: 16, fontWeight: 500, color: '#fff'}}>Safety PIN</Text>
              <Icon name="angle-right" color="#eee" size={22} />
            </View>
          </Pressable>


          <Pressable style={[styles.card_wrapper, {backgroundColor: '#C7D03C'}]} onPress={() => toggleModal('thirdCard')}>
            <View style={styles.icon_wrapper}> 
              <Icon name='calendar' size={20} color='#fff'/>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 60}}>
              <Text style={{fontSize: 16, fontWeight: 500, color: '#fff'}}>Ride Scheduling</Text>
              <Icon name="angle-right" color="#eee" size={22} />
            </View>
          </Pressable>


          <Pressable style={[styles.card_wrapper, {backgroundColor: '#E31D36'}]} onPress={() => toggleModal('fourthCard')}>
            <View style={styles.icon_wrapper}> 
              <Icon name='truck' size={20} color='#fff'/>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 60}}>
              <Text style={{fontSize: 16, fontWeight: 500, color: '#fff'}}>LuxeDrop</Text>
              <Icon name="angle-right" color="#eee" size={22} />
            </View>
          </Pressable>
        </View>


        {modalVisible && (
          <ModalSheet 
            isVisible={modalVisible} 
            setIsVisible={setModalVisible}
            Feature_name={
              activeCard === 'firstCard' ? "LuxyCoin" :
              activeCard === 'secondCard' ? "Safety PIN" :
              activeCard === 'thirdCard' ? "Ride Scheduling" :
              activeCard === 'fourthCard' ? "LuxeDrop" : ""
            }
            Feature_content={
              activeCard === 'firstCard' ? "Introducing LuxyCoin! 🚀 Every time you ride with LuxeDriveGo, you earn LuxyCoins—our exclusive rewards system. The more you ride, the more you earn! Redeem LuxyCoins for discounts, free rides, and special perks. Start earning today!" :
              activeCard === 'secondCard' ? "For added security, every ride now comes with a unique 4-digit Safety PIN. Before your trip begins, share this PIN with your driver to ensure you're in the right ride. This helps prevent ride mix-ups and enhances passenger safety." :
              activeCard === 'thirdCard' ? "Schedule your rides with LuxeDriveGo! 🚖 You can now book rides from wherever you are to any place you want, anytime you want. Schedule your rides and get rewarded for your efforts!" :
              activeCard === 'fourthCard' ? "Need to send a package quickly? LuxeDrop lets you book a driver to deliver your parcels, documents, or small items securely and on time. Whether it's a last-minute delivery or a planned drop-off, LuxeDrop ensures fast and reliable service." : ""
            }
            icon_name={
              activeCard === 'firstCard' ? "currency-usd" :
              activeCard === 'secondCard' ? "lock" :
              activeCard === 'thirdCard' ? "calendar" :
              activeCard === 'fourthCard' ? "package-variant" : ""
            }
            button_text={"How it works"}
          />
        )}


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
    color: '#444',
    marginTop: 20

  },
  sub_header_text: {
    fontSize: 16,
    fontWeight: 400,
    color: '#888',
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
  new_section: {
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 0,
    paddingBottom: 10,
    paddingHorizontal: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    flexWrap: 'wrap',
  },
  card_wrapper: {
    backgroundColor: '#41D188',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '49%',
    aspectRatio: 1
  },
  icon_wrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff50',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  }

})


