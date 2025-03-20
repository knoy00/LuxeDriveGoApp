// import React, { useRef, useState, useEffect } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
// import RBSheet from "react-native-raw-bottom-sheet";
// import { GestureDetector, Gesture } from "react-native-gesture-handler";
// import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

// export default function CustomBottomSheet() {
//   const refRBSheet = useRef(null);
//   const screenHeight = Dimensions.get("window").height;

//   // Height state (initial at 30% of screen)
//   const sheetHeight = useSharedValue(screenHeight * 0.3);
//   const [positionText, setPositionText] = useState("Hello");

//   useEffect(() => {
//     // Open bottom sheet at initial height
//     refRBSheet.current.open();
//   }, []);

//   // Handle dragging gesture
//   const panGesture = Gesture.Pan()
//     .onUpdate((event) => {
//       let newHeight = screenHeight * 0.3 - event.translationY;
//       newHeight = Math.min(screenHeight * 0.7, Math.max(screenHeight * 0.3, newHeight)); // Keep within limits
//       sheetHeight.value = newHeight;
//     })
//     .onEnd(() => {
//       // Snap to 50% or 70%
//       if (sheetHeight.value > screenHeight * 0.5) {
//         sheetHeight.value = withSpring(screenHeight * 0.7);
//         setPositionText("It's at 70%");
//       } else {
//         sheetHeight.value = withSpring(screenHeight * 0.5);
//         setPositionText("It's at 50%");
//       }
//     });

//   // Reset height when closed
//   const handleReset = () => {
//     sheetHeight.value = withSpring(screenHeight * 0.3);
//     setPositionText("Hello");
//   };

//   return (
//     <View style={styles.container}>
//       <RBSheet
//         ref={refRBSheet}
//         height={screenHeight * 0.3} // Start at 30%
//         openDuration={250}
//         closeDuration={200}
//         closeOnDragDown={false} // We handle drag manually
//         onClose={handleReset} // Reset when fully closed
//         customStyles={{
//           container: [styles.bottomSheet, { height: sheetHeight.value }],
//         }}
//       >
//         <GestureDetector gesture={panGesture}>
//           <Animated.View>
//             {/* Gray Drag Handle - Swipable */}
//             <View style={styles.handle} />

//             {/* Dynamic Text */}
//             <View style={styles.content}>
//               <Text style={styles.text}>{positionText}</Text>
//             </View>
//           </Animated.View>
//         </GestureDetector>
//       </RBSheet>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   bottomSheet: {
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 16,
//   },
//   handle: {
//     width: 50,
//     height: 5,
//     backgroundColor: "#999",
//     borderRadius: 3,
//     alignSelf: "center",
//     marginBottom: 10,
//   },
//   content: { alignItems: "center", marginBottom: 20 },
//   text: { fontSize: 18, fontWeight: "bold" },
// });
