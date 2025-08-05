import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <AppRoutes />
    </Provider>
  );
}
export default App;