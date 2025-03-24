import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

const Trips = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Button to Show Bottom Sheet */}
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      {/* Bottom Sheet Modal */}
      <Modal
        transparent
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.bottomSheet}>
            <Text style={styles.title}>This is a Bottom Sheet</Text>
            <Text style={styles.title}>This is a Bottom Sheet</Text>
            <TouchableOpacity onPress={() => setVisible(false)} style={styles.button}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam libero hic fuga adipisci dicta, quia sapiente eos reiciendis iste fugit nobis consectetur cum temporibus ratione saepe, eaque possimus deserunt.</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: { backgroundColor: "#222", padding: 10, borderRadius: 5 },
  buttonText: { color: "#333", fontSize: 16 },
  overlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
  bottomSheet: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});

export default Trips;
