import { StyleSheet, Text, View, Modal, Pressable, Image} from 'react-native'
import React, {useState} from 'react'

const ChooseRide = () => {

    const [visible, setVisible] = useState(false);
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

                    <View style={styles.pick_ride_container_skeleton}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <View>
                                <Image source={require('../assets/icons/white_car.png')} style={styles.image_icon}/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 100}}>
                                <View>
                                    <Text style={styles.ride_name}>LuxeDriveGo</Text>
                                    <Text style={styles.time}>8:13 AM</Text>
                                </View>
                                <View>
                                    <Text style={styles.price}>$1000</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <Pressable onPress={() => setVisible(false)}>
                    <Text>Close Bottom Sheet</Text>
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
    
        backgroundColor: 'red',
        borderRadius: 10,
        marginBottom: 10
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.0)"
    },
    image_icon: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    ride_name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    time:  {
        fontSize: 14,
        color: '#888'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    }
})