import { StyleSheet, Text, View, Modal, Pressable, Image, TextInput} from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import {X, Bus, ChevronRight, ChevronLeft } from 'lucide-react-native';
import { MotiView } from 'moti';
import { useRouter } from 'expo-router';
import { ScreenContext } from './ScreenContext';

const ChooseRide = ({visible, setIsVisible, placeholderDestination}) => {
    const {setLocateDriver} = useContext(ScreenContext)
    const router = useRouter();

    const [isActive, setIsActive] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [destination, setDestination] = useState(placeholderDestination);
    


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
    }, [])

    const handleActiveTab = (tab) => {
        setIsActive(prev => prev === tab ? null : tab);
    }

    const handleBackButton = () => {
        
    }

    const confirmRide = () => {
        setIsVisible(false);
        setLocateDriver(true);
    }

  return (
    <View style={styles.container}>
      <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      animationType='slide'
      >

        {!isLoading && <MotiView style={{alignItems: 'center'}} 
            from={{opacity: 0, translateY: -50}}
            animate={{opacity: 1, translateY: 0}}
            timing={{type: 'timing', duration: 1500}}
        >

            <View style={{position: 'absolute', top: 50, backgroundColor: '#fff', width: '95%', paddingVertical: 10, paddingHorizontal: 40, borderRadius: 10}}>
                <Pressable style={{position: 'absolute', top: 15, left: 10}}>
                    <ChevronLeft size={25} color={'#222'}/>
                </Pressable>
                <TextInput
                    placeholder={"Your Destination"}
                    style={{width: '100%', backgroundColor: '#eee', borderRadius: 5, paddingHorizontal: 20, paddingVertical: 8, textAlign: 'center'}}
                    fontSize="20"
                    value={destination}
                    onChangeText={(text) => setDestination(text)}

                />
            </View>
        </MotiView>}
        

        <View style={styles.overlay}>
                <View style={styles.modal_sheet}>
                    <View>
                      <Text style={{color: '#222', fontSize: 20, fontWeight: 'bold', textAlign: 'center', backgroundColor: '#fff', padding: 10, marginBottom: 20, borderBottomWidth: .8, borderColor: '#eee'}}>Choose a Ride</Text>
                    </View>

                    { isLoading && <>
                        <Pressable style={[styles.pick_ride_container_skeleton]}>
                            <View style={{flexDirection: 'row', gap: 20}}>
                                <View style={{width: '21%', marginTop: 10}}>
                                    <Image source={require('../assets/icons/car_loading.png')} style={styles.image_icon}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 40, justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#ccc'}}>
                                    <View style={{ width: 160}}>
                                        <Text style={styles.ride_name_skeleton}>LuxeDriveGo</Text>
                                        <Text style={styles.time_skeleton}>8:13 AM</Text>
                                    </View>
                                    <View style={{ marginTop: -10}}>
                                        <Text style={styles.price_skeleton}>GHC100</Text>
                                        <Text style={styles.discount_skeleton}>$1000</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                        <Pressable style={[styles.pick_ride_container_skeleton]}>
                            <View style={{flexDirection: 'row', gap: 20}}>
                                <View style={{width: '21%', marginTop: 10}}>
                                    <Image source={require('../assets/icons/car_loading.png')} style={styles.image_icon}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 40, justifyContent: 'space-between' , borderBottomWidth: 1, borderColor: '#ccc'}}>
                                    <View style={{ width: 160}}>
                                        <Text style={styles.ride_name_skeleton}>LuxeGreen</Text>
                                        <Text style={styles.time_skeleton}>8:13 AM</Text>
                                    </View>
                                    <View style={{ marginTop: -10}}>
                                        <Text style={styles.price_skeleton}>GHC1000</Text>
                                        <Text style={styles.discount_skeleton}>$1000</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                        <Pressable style={[styles.pick_ride_container_skeleton]}>
                            <View style={{flexDirection: 'row', gap: 20}}>
                                <View style={{width: '21%', marginTop: 10}}>
                                    <Image source={require('../assets/icons/car_loading.png')} style={styles.image_icon}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 40, justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#ccc'}}>
                                    <View style={{ width: 160}}>
                                        <Text style={styles.ride_name_skeleton}>LuxePremium</Text>
                                        <Text style={styles.time_skeleton}>8:13 AM</Text>
                                    </View>
                                    <View style={{ marginTop: -10}}>
                                        <Text style={styles.price_skeleton}>GHC1000</Text>
                                        <Text style={styles.discount_skeleton}>$1000</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                        <Pressable style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 20, width: '100%'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>

                                <Text style={{color: '#ddd', fontSize: 16, fontWeight: 'regular', backgroundColor: '#ddd'}}>**** 5410</Text>
                            </View>
                            <View style={{backgroundColor: '#ddd'}}>
                                <ChevronRight  size={20} color='#ddd'/>
                            </View>
                        </Pressable>

                        <View style={{ alignItems: 'center', paddingHorizontal: 10, marginTop: 5}}>
                            <Pressable style={[styles.button_skeleton]}>
                                <Text style={styles.button_text_skeleton}>Confirm Ride</Text>
                            </Pressable>
                        </View>

                    </>}

                    {!isLoading && <>
                        
                        <Pressable onPress={() => handleActiveTab('go')} style={[styles.pick_ride_container_skeleton, isActive === "go" ? {borderWidth: 2, borderColor: '#222'} : {}]}>
                            <View style={{flexDirection: 'row', gap: 20}}>
                                <View style={{width: '21%', marginTop: 10}}>
                                    <Image source={require('../assets/icons/white_car.png')} style={styles.image_icon}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 40, justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#eee'}}>
                                    <View style={{ width: 160}}>
                                        <Text style={styles.ride_name}>LuxeDriveGo</Text>
                                        <Text style={styles.time}>8:13 AM</Text>
                                    </View>
                                    <View style={{ marginTop: -10}}>
                                        <Text style={styles.price}>GHC130</Text>
                                        <Text style={styles.discount}>$1000</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                        <Pressable onPress={() => handleActiveTab('green')} style={[styles.pick_ride_container_skeleton, isActive === 'green' ? {borderWidth: 2, borderColor: '#222'} : {}]}>
                            <View style={{flexDirection: 'row', gap: 20}}>
                                <View style={{width: '21%', marginTop: 10}}>
                                    <Image source={require('../assets/icons/green.png')} style={styles.image_icon}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 40, justifyContent: 'space-between' , borderBottomWidth: 1, borderColor: '#eee'}}>
                                    <View style={{ width: 160}}>
                                        <Text style={styles.ride_name}>LuxeGreen</Text>
                                        <Text style={styles.time}>8:13 AM</Text>
                                    </View>
                                    <View style={{ marginTop: -10}}>
                                        <Text style={styles.price}>GHC235</Text>
                                        <Text style={styles.discount}>$1000</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                        <Pressable onPress={() => handleActiveTab('premium')} style={[styles.pick_ride_container_skeleton, isActive === "premium" ? {borderWidth: 2, borderColor: '#222'} : {}]}>
                            <View style={{flexDirection: 'row', gap: 20}}>
                                <View style={{width: '21%', marginTop: 10}}>
                                    <Image source={require('../assets/icons/Gold.png')} style={styles.image_icon}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 40, justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#eee'}}>
                                    <View style={{ width: 160}}>
                                        <Text style={styles.ride_name}>LuxePremium</Text>
                                        <Text style={styles.time}>8:13 AM</Text>
                                    </View>
                                    <View style={{ marginTop: -10}}>
                                        <Text style={styles.price}>GHC520</Text>
                                        <Text style={styles.discount}>$1000</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                        <Pressable onPress={() => setIsActive(!isActive)} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                            <Image source={require('../assets/icons/visa.png')} style={{width: 40, height: 50, resizeMode: 'contain'}}/>
                            <Text style={{color: '#222', fontSize: 16, fontWeight: 'regular', fontWeight: 500}}>**** 5410</Text>
                        </View>
                        <View>
                            <ChevronRight  size={20} color='#222'/>
                        </View>
                    </Pressable>

                    <View style={{ alignItems: 'center', paddingHorizontal: 10, marginTop: 5}}>
                        <Pressable onPress={confirmRide} style={[styles.button, {backgroundColor: isActive ? '#222' : '#ddd'}]}>
                            <Text style={styles.button_text}>Confirm Ride</Text>
                        </Pressable>
                    </View>

                    </>}

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
        backgroundColor: 'rgba(0, 0, 0, 0) ',
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
        marginBottom: 0,
        borderWidth: 2,
        borderColor: '#fff',
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
        color: '#444',
        textAlign: 'left'
    },
    discount: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        textDecorationLine: 'line-through',
        textAlign: 'right'
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
    },
    ride_name_skeleton: {
        width: '100%',
        backgroundColor: '#ddd',
        color: '#ddd'  
    },
    time_skeleton: {
        width: '50%',
        backgroundColor: '#ddd',
        color: '#ddd',
        marginTop: 5  
    },
    price_skeleton: {
        width: 70,
        backgroundColor: '#ddd',
        color: '#ddd',
        marginTop: 10
    },
    discount_skeleton: {
        width: 40,
        backgroundColor: '#ddd',
        color: '#ddd',
        marginTop: 5,
        
    },
    button_skeleton: {
        paddingVertical: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        width: '100%',
    },
    button_text_skeleton:{
        color: '#ddd'
    }   
})