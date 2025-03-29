import { StyleSheet, Text, View, Modal, Animated, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState, useEffect} from 'react'
import { ArrowDown } from 'lucide-react-native';
import { ScreenContext } from "./ScreenContext";
import { useContext } from "react";
import { MotiView } from 'moti';
import { CarTaxiFront,BadgeCheck, MessageSquareText, Phone } from 'lucide-react-native';

const DriverInfo = () => {
    return (
        <>
            <View style={styles.driver_info}>
                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <View style={{width: 60, height: 60, alignItems: 'center', justifyContent: 'center', marginTop: 0, backgroundColor: '#efefef', borderRadius: 50}}>
                            <Image style={{width: 60, height: 60, borderRadius: 50, resizeMode: 'cover', marginRight: 0}} source={require('../assets/images/man.avif')} />
                        </View>
                        <Text style={{fontSize: 17, fontWeight: '500', color: '#222'}}>Kwame Sarfo</Text>
                        <BadgeCheck size={16} color="blue" style={{marginRight: 0, position: 'absolute', top: 22, left: 160}}/>
                    </View>
                    
                    <View>
                        <Text style={{fontSize: 18, fontWeight: '600', color: '#222'}}>GR-4244-20</Text>
                        <Text style={{fontSize: 16, fontWeight: '400', color: '#222'}}>Toyota Corolla</Text>
                        {/* <Text style={{fontSize: 16, fontWeight: '700', color: 'orange'}}>4.7 / 5.0</Text> */}
                    </View>
                </View>
            </View>
        </>
    )
}


const LocateDriver = () => {
    const { locateDriver } = useContext(ScreenContext);
    if (!locateDriver) return null;

    const [driverLocated, setDriverLocated] = useState(false)



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

    useEffect(() => {
        setTimeout(() => {
            setDriverLocated(true);
        }, 5000)
    }, [])

  return (
    <View style={styles.container}>
      <Modal 
        visible={locateDriver}
        animationType='slide'
        transparent={true}
        onRequestClose={() => locateDriver(false)}
      >
        <View style={styles.overlay}>
            <View style={styles.modal_sheet}>
                {!driverLocated && <>
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
                </>}

                {!driverLocated && <MotiView
                    from={{ opacity: 0, translateY: 50}}
                    animate={{ opacity: 1, translateY: 0}}
                    transition={{ type: 'timing', duration: 500 }}
                >
                    <View style={styles.header_wrapper}>
                        <Text style={styles.title}>Driver located</Text>
                        <Text style={styles.sub_title}>Driver has been located. Connecting you to the driver...</Text>
                    </View>
                    <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                        <View style={{width: 90, height: 90, alignItems: 'center', justifyContent: 'center', marginTop: 20, backgroundColor: '#efefef', borderRadius: 50}}>
                            <CarTaxiFront size={50} color={'#222'}/>    
                        </View> 
                    </View>

                    {<DriverInfo />}
                    
                </MotiView>}

                <MotiView>
                    <View style={styles.header_wrapper}>
                        <Text style={styles.title}>Arriving in 10 minutes</Text>
                        <Text style={styles.sub_title}>Driver is on the way to you. Please have your phone by you incase the driver wants to contact you.</Text>
                    </View>

                    <DriverInfo />

                    <View style={{flexDirection: 'row',width: '100%', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 50}}>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{width: 60, height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#efefef', borderRadius: 50}}>
                                <MessageSquareText size={30} color={'#222'}/>
                            </View>
                            <Text style={{fontSize: 16, fontWeight: '700', color: '#222', marginTop: 5}}>Chat</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{width: 60, height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#efefef', borderRadius: 50}}>
                                <Phone size={30} color={'#222'}/>
                            </View>
                            <Text style={{fontSize: 16, fontWeight: '700', color: '#222', marginTop: 5}}>Call</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{width: 60, height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#efefef', borderRadius: 50}}>
                                <MessageSquareText size={30} color={'#222'}/>
                            </View>
                            <Text style={{fontSize: 16, fontWeight: '700', color: '#222', marginTop: 5}}>Chat</Text>
                        </View>
                    </View>


                </MotiView>

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
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "transparent",
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
        fontWeight: '500',
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
    },
    driver_info: {
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#eee',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 10,
    },
    driver_info_text: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 10,
    }
})