import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import HabitCheckBox from "../Components/HabitCheckBox";
import { useSelector } from "react-redux";
const MainView = () => {
  const habitsInApp = useSelector((state) => {
    console.log(state.habitControllerRedux.habitsInApp);
    return state.habitControllerRedux.habitsInApp;
  });

  return (
    <View>
      <Text style={styles.textHeader}>My Habits</Text>

      <ScrollView style={styles.scrollView}>
        {habitsInApp.map((item, index) => (
          <HabitCheckBox habitText={item.habitTitle} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Nunito_600SemiBold",
    marginTop: 10,
    textAlignVertical: "center",
    textAlign: "center",
  },
  scrollView: {
    height: "100%",
    marginBottom: 70,
  },
  containerContent: { marginTop: 40 },
  containerHeader: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#F1F1F1",
  },
  headerContent: {
    marginTop: 0,
  },
  Modal: {
    backgroundColor: "#005252",
    marginTop: 0,
  },
});

export default MainView;
