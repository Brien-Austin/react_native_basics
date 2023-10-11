import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        textcolor: "#252525",
      }}
    >
      <Text style={{ color: "black", fontSize: 24 }}>
        Getting started with React native !!!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#252525",
          paddingHorizontal: 20,

          borderRadius: 5,
          paddingVertical: 10,
          marginTop: 20,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 18, color: "white" }}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
