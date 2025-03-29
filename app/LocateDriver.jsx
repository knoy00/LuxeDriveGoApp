import { StyleSheet, Text, View, Modal, Animated, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect} from 'react'
import { ArrowDown } from 'lucide-react-native';

const LocateDriver = () => {

    const translateX = useRef(new Animated.Value(-60)).current;

    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateX, {
            toValue: 240, 
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(translateX, {
            toValue: -40,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, []);

  return (
    <View style={styles.container}>
      <Modal 
        visible={true}
        animationType='slide'
      >
        <View style={styles.overlay}>
            <View style={styles.modal_sheet}>
                <View style={styles.header_wrapper}>
                    <Text style={styles.title}>Searching for a driver</Text>
                    <Text style={styles.sub_title}>We're searching for a driver near you</Text>
                </View>

                <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                    <View style={styles.loader}>
                        <Animated.View style={[styles.loaderBar, { transform: [{ translateX }] }]} />
                    </View>
                </View>

                <View style={{width: '100%',  marginTop: 20, paddingHorizontal: 20}}>
                    <Text style={styles.route_text}>Pickup • Adenta</Text>

                    <ArrowDown size={25} color="#222" style={{marginBottom: 10}}/>

                    <Text style={styles.route_text}>Destination • Accra</Text>
                </View>

                <TouchableOpacity style={styles.cancel_btn}>
                    <Text style={styles.cancel_btn_text}>Cancel</Text>
                </TouchableOpacity>
                
            </View>
        </View>
      </Modal>
    </View>
  )
}

export default LocateDriver

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0)"
    },
    modal_sheet: {
        backgroundColor: '#fff',
        padding: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width : '100%',
    },
    header_wrapper: {
        width: '100%',
        marginTop: 0,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#efefef',
    },
    title: {
        fontSize: 30,
        fontWeight: '400',
        color: '#222'
    },
    sub_title: {
        color: '#555',
        marginTop: 10,
        fontSize: 17,
        fontWeight: '400'
    },
    loader: {
        backgroundColor: '#eee',
        height: 5,
        width: '90%',
        marginVertical: 10,
        overflow: 'hidden',
        borderRadius: 10,
      },
    loaderBar: {
      width: '50%',
      height: 5,
      backgroundColor: '#222',
      position: 'absolute',
      left: 0,
      top: 0,
      borderRadius: 10,
    },
    route_text: {
        fontSize: 20,
        fontWeight: '400',
        color: '#222',
        marginBottom: 10,
    },
    cancel_btn: {
        width: '100%',
        height: 50,
        backgroundColor: '#f50000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 20
    },
    cancel_btn_text: {
        color: '#fff',
        fontSize: 19,
        fontWeight: '600'
    }
})