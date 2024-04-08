import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const BottomNavigationBar = ({ tabNumber, setTabNumber }) => {
  return (
    <View style={styles.bottomNavigationContainer}>
      <TouchableOpacity
        style={[
          styles.navigationContainerItem,
          tabNumber == 0 && { backgroundColor: "#e6e6e6" },
        ]}
        onPress={() => {
          setTabNumber(0);
        }}
      >
        <Icon name="accessibility-outline" size={30} color="#000" />

        <Text style={styles.textBottom}>Habbits</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navigationContainerItem,
          tabNumber == 1 && { backgroundColor: "#e6e6e6" },
        ]}
        onPress={() => {
          console.log("Calendar");
          setTabNumber(1);
        }}
      >
        <Icon name="add-circle-outline" size={30} color="#000" />
        <Text style={styles.textBottom}>Add Habit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navigationContainerItem,
          tabNumber == 2 && { backgroundColor: "#e6e6e6" },
        ]}
        onPress={() => {
          console.log("Calendar");
          setTabNumber(2);
        }}
      >
        <Icon name="calendar-outline" size={30} color="#000" />
        <Text style={styles.textBottom}>Calendar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigationContainer: {
    flexDirection: "row",
    height: 70,
    maxHeight: 70,
    minHeight: 70,
    width: "100%",

    marginTop: "auto",
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 0,
  },
  navigationContainerItem: {
    alignItems: "center",
    justifyContent: "center",
    width: "33%",
    height: "100%",
    borderColor: "#49B1FF",
    borderTopWidth: 1,
  },
  textBottom: {
    marginTop: 5,
  },
});

export default BottomNavigationBar;
