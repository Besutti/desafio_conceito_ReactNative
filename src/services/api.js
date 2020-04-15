import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;


// react-native run-android
// adb reverse tcp:3333 tcp:3333
// 