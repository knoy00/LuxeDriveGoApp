import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable, Image } from 'react-native'
import { MotiView } from 'moti';
import { useContext, useState } from 'react';
import { ScreenContext } from '../ScreenContext';
import { FileX , Navigation2, MapPin, MoveDown} from 'lucide-react-native';


const Trips = () => {
  const [activeTab, setActiveTab] = useState('complete')
  const {tripsArray} = useContext(ScreenContext)  


  const handleTab = (tab) => {
    setActiveTab(tab)
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View
        style={styles.header_wrapper}
      >
        <MotiView
          from={{ opacity: 0, translateY: 50}}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 1000 }}
        >
          <Text style={styles.header_text}>Trips</Text>
        </MotiView>
      </View>

      <>
        {tripsArray.length > 0 ? (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FileX size={90} color={'#111'} />
            <Text style={{fontSize: 22, fontWeight: 500, color: '#333', marginTop: 20}}>You currently have no ride history</Text>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{padding: 10, marginTop: 20, borderRadius: 70, width: '90%', borderWidth: 2, borderColor: '#111'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                  <Pressable style={[styles.tab_wrapper, {backgroundColor: activeTab === "complete" ? '#111' : '#fff'}]} onPress={() => setActiveTab("complete")}>
                    <Text style={[styles.tab_text, {color: activeTab === "complete" ? '#fff' : '#111'}]}>Completed</Text>
                  </Pressable>

                  <Pressable style={[styles.tab_wrapper, {backgroundColor: activeTab === "active" ? '#111' : '#fff'}, ]} onPress={() => setActiveTab("active")}>
                    <Text style={[styles.tab_text, {color: activeTab === "active" ? '#fff' : '#111'}]}>Active</Text>
                  </Pressable>

                  <Pressable style={[styles.tab_wrapper, {backgroundColor: activeTab === "scheduled" ? '#111' : '#fff'}]} onPress={() => setActiveTab("scheduled")}>
                    <Text style={[styles.tab_text, {color: activeTab === "scheduled" ? '#fff' : '#111'}]}>Scheduled</Text>
                  </Pressable>
                  
                </View>
              </View>
            </View>
            
            {activeTab === "complete" && <ScrollView style={{flexGrow: 1, marginTop: 30, height: '100%'}} bounces={true}>
              

              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 20, borderWidth: 1.5, borderColor: '#ddd', padding: 10, borderRadius: 20}}>
                <View style={{flexDirection: 'column', alignItems: 'center', gap: 15}}>
                  <MapPin size={20} color={'red'} />
                  {/* <View style={{height:50, width: 3, backgroundColor: '#777', borderRadius:50}}></View> */}
                  <MoveDown size={25} color={'#999'} />
                  <Navigation2 size={20} color={'red'} />
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between', width: 180}}>
                  <View>
                    <Text style={styles.location_text} ellipsizeMode='tail' numberOfLines={1}>University of Ghana, Accra</Text>
                    <Text style={styles.route_label}>Pickup Point</Text>
                  </View>

                  <View>
                    <Text style={styles.location_text} ellipsizeMode='tail' numberOfLines={1}>Pinkberry, East Legon</Text>
                    <Text style={styles.route_label}>Destination</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                  <View>
                    <Text style={{fontSize: 16, fontWeight: '600', color: '#888'}}>Amount</Text>
                    <Text style={{fontSize: 16, fontWeight: '600', color: 'green'}}>GHC 129</Text>
                  </View>

                  <View>
                    <Text style={{fontSize: 16, fontWeight: '600', color: '#888'}}>Distance</Text>
                    <Text style={{fontSize: 16, fontWeight: '600', color: 'green'}}>12km</Text>
                  </View>
                </View>
              </View>

              
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 20, borderWidth: 1.5, borderColor: '#ddd', padding: 10, borderRadius: 20}}>
                <View style={{flexDirection: 'column', alignItems: 'center', gap: 15}}>
                  <MapPin size={20} color={'red'} />
                  {/* <View style={{height:50, width: 3, backgroundColor: '#777', borderRadius:50}}></View> */}
                  <MoveDown size={25} color={'#999'} />
                  <Navigation2 size={20} color={'red'} />
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between', width: 180}}>
                  <View>
                    <Text style={styles.location_text} ellipsizeMode='tail' numberOfLines={1}>University of Ghana, Accra</Text>
                    <Text style={styles.route_label}>Pickup Point</Text>
                  </View>

                  <View>
                    <Text style={styles.location_text} ellipsizeMode='tail' numberOfLines={1}>Pinkberry, East Legon</Text>
                    <Text style={styles.route_label}>Destination</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                  <View>
                    <Text style={{fontSize: 16, fontWeight: '600', color: '#888'}}>Amount</Text>
                    <Text style={{fontSize: 16, fontWeight: '600', color: 'green'}}>GHC 129</Text>
                  </View>

                  <View>
                    <Text style={{fontSize: 16, fontWeight: '600', color: '#888'}}>Distance</Text>
                    <Text style={{fontSize: 16, fontWeight: '600', color: 'green'}}>12km</Text>
                  </View>
                </View>
              </View>

              
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 20, borderWidth: 1.5, borderColor: '#ddd', padding: 10, borderRadius: 20}}>
                <View style={{flexDirection: 'column', alignItems: 'center', gap: 15}}>
                  <MapPin size={20} color={'red'} />
                  {/* <View style={{height:50, width: 3, backgroundColor: '#777', borderRadius:50}}></View> */}
                  <MoveDown size={25} color={'#999'} />
                  <Navigation2 size={20} color={'red'} />
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between', width: 180}}>
                  <View>
                    <Text style={styles.location_text} ellipsizeMode='tail' numberOfLines={1}>University of Ghana, Accra</Text>
                    <Text style={styles.route_label}>Pickup Point</Text>
                  </View>

                  <View>
                    <Text style={styles.location_text} ellipsizeMode='tail' numberOfLines={1}>Pinkberry, East Legon</Text>
                    <Text style={styles.route_label}>Destination</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                  <View>
                    <Text style={{fontSize: 16, fontWeight: '600', color: '#888'}}>Amount</Text>
                    <Text style={{fontSize: 16, fontWeight: '600', color: 'green'}}>GHC 129</Text>
                  </View>

                  <View>
                    <Text style={{fontSize: 16, fontWeight: '600', color: '#888'}}>Distance</Text>
                    <Text style={{fontSize: 16, fontWeight: '600', color: 'green'}}>12km</Text>
                  </View>
                </View>
              </View>

              
            </ScrollView>}

            {activeTab === 'active' && <ScrollView contentContainerStyle={{flexGrow:1, paddingBottom: 30}} style={{flex: 1, marginTop: 30}} contentInsetAdjustmentBehavior="automatic">
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 20, borderWidth: 1.5, borderColor: '#ddd', padding: 10, borderRadius: 20}}>
                <View style={{flexDirection: 'column', alignItems: 'center', gap: 15}}>
                  <MapPin size={20} color={'red'} />
                  {/* <View style={{height:50, width: 3, backgroundColor: '#777', borderRadius:50}}></View> */}
                  <MoveDown size={25} color={'#999'} />
                  <Navigation2 size={20} color={'red'} />
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between', width: 180}}>
                  <View>
                    <Text style={styles.location_text} ellipsizeMode='tail' numberOfLines={1}>University of Ghana, Accra</Text>
                    <Text style={styles.route_label}>Pickup Point</Text>
                  </View>

                  <View>
                    <Text style={styles.location_text} ellipsizeMode='tail' numberOfLines={1}>Pinkberry, East Legon</Text>
                    <Text style={styles.route_label}>Destination</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                  <View>
                    <Text style={{fontSize: 16, fontWeight: '600', color: '#888'}}>Amount</Text>
                    <Text style={{fontSize: 16, fontWeight: '600', color: 'green'}}>GHC 129</Text>
                  </View>

                  <View>
                    <Text style={{fontSize: 16, fontWeight: '600', color: '#888'}}>Distance</Text>
                    <Text style={{fontSize: 16, fontWeight: '600', color: 'green'}}>12km</Text>
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 20, alignItems:'center'}}>
                <View style={styles.seperator}></View>
                <View>
                  <Text>Details</Text>
                </View>
                <View style={styles.seperator}></View>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 20, borderWidth: 1, borderColor: '#ddd', alignItems:'center', padding: 10, borderRadius: 20}}>
                <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                  <View style={{width: 60, height: 60, alignItems: 'center', justifyContent: 'center', marginTop: 0, backgroundColor: '#efefef', borderRadius: 50}}>
                    <Image style={{width: 60, height: 60, borderRadius: 50, resizeMode: 'cover', marginRight: 0}} source={require('../../assets/images/man.avif')} />
                  </View>
                  <View>
                    <Text style={{fontSize: 18, fontWeight: '600', color: '#222'}}>Kwame Sarfo</Text>
                    <Text style={{fontSize: 15, fontWeight: '600', color: '#888', marginTop: 5}}>Driver</Text>
                  </View>
                </View>
                <View>
                  <Text style={{fontSize: 18, fontWeight: '600', color: '#222'}}>Toyota Corolla</Text>
                  <Text style={{fontSize: 15, fontWeight: '600', color: '#888', marginTop: 5, textAlign: 'right'}}>GR-4324-19</Text>
                </View>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginHorizontal: 20, alignItems:'center', padding: 10, borderRadius: 20}}>
                <View>
                  <Text style={styles.details_header}>Payment</Text>
                  <Text style={styles.details_sub_text}>Card</Text>
                </View>
                <View>
                  <Text style={styles.details_header}>Duration</Text>
                  <Text style={styles.details_sub_text}>00:48:23</Text>
                </View>
                <View>
                  <Text style={styles.details_header}>Trip Fare</Text>
                  <Text style={styles.details_sub_text}>GHC129</Text>
                </View>
                <View>
                  <Text style={styles.details_header}>Discount</Text>
                  <Text style={styles.details_sub_text}>---</Text>
                </View>
                
              </View>

              <View>
                
              </View> 
            
              <View style={{ marginTop: 20, padding: 15}}>
                <View style={{height: 150, width: '100%', backgroundColor: '#111', borderRadius: 20, paddingHorizontal: 20}}>
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#fff', marginTop: 10, textAlign: 'left'}}>University of Ghana</Text>
                  <Text style={{fontSize: 14, fontWeight: '400', color: '#888', marginTop: 0, textAlign: 'left'}}>Accra, Ghana</Text>

                  <View style={{width: '100%', backgroundColor: '#fff', height: 4, marginTop: 30, borderRadius: 20}}>
                    <View style={{width: '30%', height: '100%', backgroundColor: '#e82b31', borderRadius: 20}}>
                      <View style={{position: 'absolute', width: 50, height: 40, top: -18, left: 70}}>
                        <Image source={require('../../assets/icons/driver.png')} style={{width: '100%', height: '100%', resizeMode: 'contain', transform: 'rotate(-180deg)'}}/>
                      </View>
                    </View>
                  </View>

                  <Text style={{fontSize: 16, fontWeight: '600', color: '#fff', marginTop: 30, textAlign: 'right'}}>PinkBerry</Text>
                  <Text style={{fontSize: 14, fontWeight: '400', color: '#888', marginTop: 0, textAlign: 'right'}}>East Legon</Text>

                </View>
              </View>

              <View style={{justifyContent: 'center', marginTop: 20, marginHorizontal: 20, alignItems:'center', padding: 20, borderRadius: 10, backgroundColor: '#e82b31'}}>
                <Pressable>
                  <Text style={{fontSize: 18, fontWeight: '600', color: '#fff'}}>End Trip</Text>
                </Pressable>
              </View>

            </ScrollView>}
          </View>

          
        )}
      </>


    </View>
  )
}

export default Trips

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
  tab_wrapper: {
    padding: 10, 
    borderRadius: 50,
    paddingHorizontal: 28,
  },
  tab_text: {
    fontSize: 16,
    fontWeight: 600,
    color: '#111'
  },
  location_text: {
    color: '#222',
    fontSize: 18,
    fontWeight: 600,
    width: '100%',

  },
  route_label: {
    color: '#888',
    fontSize: 15,
    fontWeight: 500,
    marginTop: 2,
  },
  seperator: {
    height: 2,
    width:150,
    backgroundColor: '#efefef',
  },
  details_header: {
    fontSize: 20,
    fontWeight: 600,
    color: '#888',
    marginBottom: 5,
  },
  details_sub_text: {
    fontSize: 16,
    fontWeight: 500,
    color: '#222',
  }
})