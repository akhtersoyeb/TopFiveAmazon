import "react-native-gesture-handler";
import { StatusBar, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Index from "./src";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Index />
      <StatusBar barStyle={"light-content"} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
