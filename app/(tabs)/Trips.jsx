import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable } from 'react-native'
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
          <View>
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

            {activeTab === "complete" && <ScrollView style={{flexGrow: 1, marginTop: 40}} bounces={true}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 0, marginHorizontal: 20, borderWidth: 1.5, borderColor: '#ddd', padding: 10, borderRadius: 20}}>
                <View style={{flexDirection: 'column', alignItems: 'center', gap: 15}}>
                  <MapPin size={20} color={'red'} />
                  {/* <View style={{height:50, width: 3, backgroundColor: '#777', borderRadius:50}}></View> */}
                  <MoveDown size={25} color={'red'} />
                  <Navigation2 size={20} color={'red'} />
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between',  width: 180}}>
                  <View>
                    <Text style={styles.location_text}>Adenta, Greater Accra</Text>
                    <Text style={styles.route_label}>Pickup Point</Text>
                  </View>

                  <View>
                    <Text style={styles.location_text}>Accra, Greater Accra</Text>
                    <Text style={styles.route_label}>Destination</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                  <View>
                    <Text>Amount</Text>
                    <Text>GHC 129</Text>
                  </View>

                  <View>
                    <Text>Distance</Text>
                    <Text>12km</Text>
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 20, borderWidth: 1.5, borderColor: '#ddd', padding: 10, borderRadius: 20}}>
                <View style={{flexDirection: 'column', alignItems: 'center', gap: 15}}>
                  <MapPin size={20} color={'green'} />
                  {/* <View style={{height:50, width: 3, backgroundColor: '#777', borderRadius:50}}></View> */}
                  <MoveDown size={25} color={'#777'} />
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
                  <MapPin size={20} color={'green'} />
                  {/* <View style={{height:50, width: 3, backgroundColor: '#777', borderRadius:50}}></View> */}
                  <MoveDown size={25} color={'#777'} />
                  <Navigation2 size={20} color={'red'} />
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between', width: 180}}>
                  <View>
                    <Text style={styles.location_text}>Adenta, Greater Accra</Text>
                    <Text style={styles.route_label}>Pickup Point</Text>
                  </View>

                  <View>
                    <Text style={styles.location_text}>Accra, Greater Accra</Text>
                    <Text style={styles.route_label}>Destination</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                  <View>
                    <Text>Amount</Text>
                    <Text>GHC 129</Text>
                  </View>

                  <View>
                    <Text>Distance</Text>
                    <Text>12km</Text>
                  </View>
                </View>
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
  }
})