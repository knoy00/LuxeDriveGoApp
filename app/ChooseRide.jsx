import { StyleSheet, Text, View, Modal, Pressable} from 'react-native'
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
                        <View>
                            <View></View>
                            <View>
                                <View></View>
                                <View></View>
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
        height: 200,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginBottom: 10
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.0)"
    }
})