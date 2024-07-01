
import { Provider } from "react-redux";
import HomePage from "./comptonents/HomePage";
import appStore from "./Redux/appStore";


function App() {
  return (
    <>
    <Provider store={appStore}>
        <HomePage />
    </Provider>

    </>
  );
}

export default App;
