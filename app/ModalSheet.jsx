import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, Pressable} from "react-native";
import * as Haptics from 'expo-haptics';
import { MotiView } from 'moti';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Trips = ({Feature_name, Feature_content, icon_name, button_text, isVisible, setIsVisible}) => {



  return (
    <View style={styles.container}>
      
      <Modal
        transparent
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <MotiView
         from={{ opacity: 0, translateY: 50}}
         animate={{ opacity: 1, translateY: 0}}
         transition={{ type: 'timing', duration: 500 }}
         style={styles.overlay}>
          <View style={styles.bottomSheet}>

            <Pressable style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#efefef', padding: 0, width: 30, height: 30, borderRadius: 30, marginRight: 0, position: 'absolute', top: 15, right: 20}} onPress={() => {setIsVisible(false); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}
            >
              <Icon name="close" color="#888" size={20} style={{}} />
            </Pressable>
            

            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#efefef', padding: 0, width: 80, height: 80, borderRadius: 40, marginTop: 10 }}>
              <Icon name={icon_name} color="#222" size={40} style={{marginRight: 0}} />
            </View>

            <Text style={styles.title}>{Feature_name}</Text>

            <Text style={styles.text_content}>
              {Feature_content}
            </Text>
            
            <TouchableOpacity  style={styles.button}>
              <Text style={styles.buttonText}>{button_text}</Text>
            </TouchableOpacity>
            
          </View>
        </MotiView
        >
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#111', zIndex: 9999 },
  button: { backgroundColor: "#111", padding: 10, paddingVertical: 20, borderRadius: 10, marginBottom: 30, width: '100%' },
  buttonText: { color: "#fff", fontSize: 16, textAlign: 'center' },
  overlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
  bottomSheet: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    paddingTop: 35
  },
  title: { fontSize: 23, fontWeight: "bold", marginVertical: 15, textAlign: 'center' },
  text_content: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'left',
    lineHeight: 23,
    color: '#666'
  }
});

export default Trips;
