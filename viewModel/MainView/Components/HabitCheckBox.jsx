import { Checkbox } from "expo-checkbox";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import {
  Nunito_600SemiBold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
export default function HabitCheckBox({ habitText }) {
  const [isChecked, setChecked] = useState(false);
  let [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Nunito_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        setChecked(!isChecked);
      }}
      value={isChecked}
      onValueChange={setChecked}
    >
      <View style={styles.container}>
        <Text style={styles.textHabit}>{habitText}</Text>

        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
      </View>
      <View style={styles.borderBottom}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    height: 82,
  },
  checkbox: {
    marginLeft: 10,
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#CDE2F2",
    borderColor: "#CDE2F2",
    marginRight: 20,
  },
  textHabit: {
    fontSize: 20,
    fontFamily: "Nunito_600SemiBold",

    marginLeft: 20,
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    opacity: 0.1,
  },
});
