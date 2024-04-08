import { configureStore } from "@reduxjs/toolkit";
import habitControllerRedux from "../reducers/index";

export default configureStore({
  reducer: { habitControllerRedux: habitControllerRedux },
});
