import { StyleSheet, Text, View, Modal, Pressable, Image} from 'react-native'
import React, {useState} from 'react'

const ChooseRide = () => {

    const [visible, setVisible] = useState(false);

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
                      <Text style={{color: '#fff', fontSize: 20, fontWeight: 'regular', textAlign: 'center', backgroundColor: '#222', padding: 10}}>Choose a Ride</Text>
                    </View>

                    <View style={[styles.pick_ride_container_skeleton, isActive ? {borderWidth: 2, borderColor: '#fff'} : {}]}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
                            <View style={{width: '21%', marginTop: 10}}>
                                <Image source={require('../assets/icons/white_car.png')} style={styles.image_icon}/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 90, justifyContent: 'center', width: '80%'}}>
                                <View>
                                    <Text style={styles.ride_name}>LuxeDriveGo</Text>
                                    <Text style={styles.time}>8:13 AM</Text>
                                </View>
                                <View style={{alignItems: 'flex-end', marginTop: -10}}>
                                    <Text style={styles.price}>$1000</Text>
                                    <Text style={styles.discount}>$1000</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.pick_ride_container_skeleton, isActive ? {borderWidth: 2, borderColor: '#fff'} : {}]}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
                            <View style={{width: '21%', marginTop: 10}}>
                                <Image source={require('../assets/icons/green.png')} style={styles.image_icon}/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 90, justifyContent: 'center', width: '80%'}}>
                                <View>
                                    <Text style={styles.ride_name}>LuxeGreen</Text>
                                    <Text style={styles.time}>8:13 AM</Text>
                                </View>
                                <View style={{alignItems: 'flex-end', marginTop: -10}}>
                                    <Text style={styles.price}>$1000</Text>
                                    <Text style={styles.discount}>$1000</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.pick_ride_container_skeleton, isActive ? {borderWidth: 2, borderColor: '#fff'} : {}]}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
                            <View style={{width: '21%', marginTop: 10}}>
                                <Image source={require('../assets/icons/white_car.png')} style={styles.image_icon}/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 90, justifyContent: 'center', width: '80%'}}>
                                <View>
                                    <Text style={styles.ride_name}>LuxeDriveGo</Text>
                                    <Text style={styles.time}>8:13 AM</Text>
                                </View>
                                <View style={{alignItems: 'flex-end', marginTop: -10}}>
                                    <Text style={styles.price}>$1000</Text>
                                    <Text style={styles.discount}>$1000</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                

                </View>

                <Pressable>
                    <Text>Payment</Text>
                </Pressable>

                <Pressable onPress={() => setVisible(false)} style={styles.button}>
                    <Text style={styles.button_text}>Confirm Ride</Text>
                </Pressable>
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
        backgroundColor: '#222',
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    pick_ride_container_skeleton: {
        width: '100%',
        borderRadius: 10,
        marginBottom: 10
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
        color: "#fff"
    },
    time:  {
        fontSize: 14,
        color: '#888'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#fff'
    },
    discount: {
        fontSize: 14,
        color: '#888',
        marginTop: 5
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        
    },
    button_text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})