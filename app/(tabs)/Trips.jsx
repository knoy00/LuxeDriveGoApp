import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable } from 'react-native'
import { MotiView } from 'moti';
import { useContext, useState } from 'react';
import { ScreenContext } from '../ScreenContext';
import { FileX , Navigation2, MapPin } from 'lucide-react-native';


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
                    <Text style={[styles.tab_text, {color: activeTab === "complete" ? '#fff' : '#111'}]}>Complete</Text>
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

            <ScrollView style={{flexGrow: 1}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                <View style={{flexDirection: 'column', alignItems: 'center', gap: 10}}>
                  <MapPin size={20} color={'#111'} />
                  <View style={{height:50, width: 3, backgroundColor: '#777', borderRadius:50}}></View>
                  <Navigation2 size={20} color={'#111'} />
                </View>
                <View>
                  <View>
                    <Text>Adenta, Greater Accra</Text>
                    <Text>Pickup Point</Text>
                  </View>

                  <View>
                    <Text>Accra, Greater Accra</Text>
                    <Text>Destination</Text>
                  </View>
                </View>
                <View></View>
              </View>
            </ScrollView>
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
  }
})