import { useState } from "react";
import { Text, StatusBar, View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import MainView from "./viewModel/MainView/Views/MainView";
import BottomNavigationBar from "./viewModel/MainView/Views/BottomNavigationBar";
import CalendarView from "./viewModel/MainView/Views/CalendarView";
import AddHabitView from "./viewModel/MainView/Views/AddHabitView";
// Redux
import { Provider } from "react-redux";
import configureStore from "./store/store";

export default function App() {
  const [tabNumber, setTabNumber] = useState(0);
  const changeTab = (tabNumber) => {
    if (tabNumber == 0) {
      return <MainView />;
    }
    if (tabNumber == 1) {
      return <AddHabitView setTabNumber={setTabNumber} />;
    }
    if (tabNumber == 2) {
      return <CalendarView />;
    }
  };

  return (
    <Provider store={configureStore}>
      <View style={styles.container}>
        {changeTab(tabNumber)}

        <BottomNavigationBar
          setTabNumber={setTabNumber}
          tabNumber={tabNumber}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
});
