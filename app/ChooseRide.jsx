import { StyleSheet, Text, View, Modal, Pressable, Image} from 'react-native'
import React, {useState} from 'react'
import {X, Bus, ChevronRight } from 'lucide-react-native';

const ChooseRide = ({visible, setIsVisible}) => {

   

    const [isActive, setIsActive] = useState(true);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setVisible(true)}>
        <Text>Open Bottom Sheet</Text>
      </Pressable>

      <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      animationType='slide'
      >

        <View style={styles.overlay}>
                <View style={styles.modal_sheet}>
                    <View>
                      <Text style={{color: '#222', fontSize: 20, fontWeight: 'bold', textAlign: 'center', backgroundColor: '#fff', padding: 10, marginBottom: 10, borderBottomWidth: .8, borderColor: '#ccc'}}>Choose a Ride</Text>
                    </View>
                    
                    <View style={[styles.pick_ride_container_skeleton, isActive ? {borderWidth: 2, borderColor: '#222'} : {}]}>
                        <View style={{flexDirection: 'row', gap: 20}}>
                            <View style={{width: '21%', marginTop: 10}}>
                                <Image source={require('../assets/icons/white_car.png')} style={styles.image_icon}/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 40, justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#ccc'}}>
                                <View style={{ width: 160}}>
                                    <Text style={styles.ride_name}>LuxeDriveGo</Text>
                                    <Text style={styles.time}>8:13 AM</Text>
                                </View>
                                <View style={{ marginTop: -10}}>
                                    <Text style={styles.price}>GHC1000</Text>
                                    <Text style={styles.discount}>$1000</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.pick_ride_container_skeleton, isActive ? {borderWidth: 2, borderColor: '#222'} : {}]}>
                        <View style={{flexDirection: 'row', gap: 20}}>
                            <View style={{width: '21%', marginTop: 10}}>
                                <Image source={require('../assets/icons/green.png')} style={styles.image_icon}/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 40, justifyContent: 'space-between' , borderBottomWidth: 1, borderColor: '#ccc'}}>
                                <View style={{ width: 160}}>
                                    <Text style={styles.ride_name}>LuxeGreen</Text>
                                    <Text style={styles.time}>8:13 AM</Text>
                                </View>
                                <View style={{ marginTop: -10}}>
                                    <Text style={styles.price}>GHC1000</Text>
                                    <Text style={styles.discount}>$1000</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.pick_ride_container_skeleton, isActive ? {borderWidth: 2, borderColor: '#222'} : {}]}>
                        <View style={{flexDirection: 'row', gap: 20}}>
                            <View style={{width: '21%', marginTop: 10}}>
                                <Image source={require('../assets/icons/Gold.png')} style={styles.image_icon}/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 40, justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#ccc'}}>
                                <View style={{ width: 160}}>
                                    <Text style={styles.ride_name}>LuxePremium</Text>
                                    <Text style={styles.time}>8:13 AM</Text>
                                </View>
                                <View style={{ marginTop: -10}}>
                                    <Text style={styles.price}>GHC1000</Text>
                                    <Text style={styles.discount}>$1000</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Pressable onPress={() => setIsActive(!isActive)} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Image source={require('../assets/icons/visa.png')} style={{width: 40, height: 50, resizeMode: 'contain'}}/>
                        <Text style={{color: '#222', fontSize: 16, fontWeight: 'regular'}}>**** 5410</Text>
                    </View>
                    <View>
                        <ChevronRight  size={20} color='#222'/>
                    </View>
                </Pressable>

                <View style={{ alignItems: 'center', paddingHorizontal: 10, marginTop: 5}}>
                    <Pressable onPress={() => setVisible(false)} style={styles.button}>
                        <Text style={styles.button_text}>Confirm Ride</Text>
                    </Pressable>
                </View>

                </View>

                
                
        </View>
        
      </Modal>
    </View>
  )
}

export default ChooseRide

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal_sheet: {
        backgroundColor: '#fff',
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width : '100%',
    },
    pick_ride_container_skeleton: {
        width: '100%',
        borderRadius: 10,
        marginBottom: 20,
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.0)"
    },
    image_icon: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginRight: 20
    },
    ride_name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: "#444",
    },
    time:  {
        fontSize: 14,
        color: '#666'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#444'
    },
    discount: {
        fontSize: 14,
        color: '#666',
        marginTop: 5
    },
    button: {
        paddingVertical: 20,
        backgroundColor: '#222',
        borderRadius: 10,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        width: '100%',

        
    },
    button_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})