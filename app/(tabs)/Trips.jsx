import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import { MotiView } from 'moti';
import { useContext } from 'react';
import { ScreenContext } from '../ScreenContext';
import { FileX } from 'lucide-react-native';


const Trips = () => {
  const {tripsArray} = useContext(ScreenContext)  
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
          <ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{padding: 10, marginTop: 20, borderRadius: 70, width: '90%', borderWidth: 2, borderColor: '#111'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.tab_wrapper}>
                    <Text style={styles.tab_text}>Complete</Text>
                  </View>
                  
              </View>
              </View>
              
            </View>
          </ScrollView>
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
    backgroundColor: '#111',
    padding: 10, 
    borderRadius: 50,
    paddingHorizontal: 20
  },
  tab_text: {
    fontSize: 16,
    fontWeight: 500,
    color: '#fff'
  }
})