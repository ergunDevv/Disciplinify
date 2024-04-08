import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { addHabit } from "../../../reducers/index";

const AddHabitView = ({ setTabNumber }) => {
  const [habitHeader, setHabitHeader] = useState("");
  const [habitDescription, setHabitDescription] = useState("");

  //   Redux

  const dispatch = useDispatch();
  const handleButtonClick = () => {
    if (habitHeader.length > 0 && habitDescription.length > 0) {
      dispatch(
        addHabit({
          habitTitle: habitHeader,
          habitDescription: habitDescription,
        })
      );
      setTabNumber(0);
      setHabitHeader("");
      setHabitDescription("");
    } else if (habitHeader.length == 0) {
      alert("Please enter habit title");
    } else if (habitDescription.length == 0) {
      alert("Please enter habit description");
    }
  };
  return (
    <View style={styles.containerTextButton}>
      <View>
        <Text style={styles.titleHabit}>Add Habit</Text>
        <Text style={styles.title}>Habit Title : </Text>
        <TextInput
          style={styles.input}
          onChangeText={setHabitHeader}
          value={habitHeader}
        />
        <Text style={styles.title}>Habit Description : </Text>
        <TextInput
          style={styles.inputDescription}
          onChangeText={setHabitDescription}
          value={habitDescription}
          multiline
        />
      </View>
      <TouchableOpacity
        style={styles.buttonAddHabit}
        onPress={handleButtonClick}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Nunito_400Regular",
          }}
        >
          Add Habit
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  titleHabit: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Nunito_600SemiBold",

    marginTop: 10,
    textAlignVertical: "center",

    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "Nunito_600SemiBold",

    margin: 12,
  },
  input: {
    height: 40,
    width: "90%",
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  inputDescription: {
    height: 100,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  containerTextButton: {
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  buttonAddHabit: {
    width: "90%",
    height: 50,
    backgroundColor: "#49B1FF",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",

    marginBottom: 30,
    borderRadius: 20,
  },
});
export default AddHabitView;
