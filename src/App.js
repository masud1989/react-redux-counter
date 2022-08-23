import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./redux/store";


function App() {
  return (
    <Provider store = {store} >
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        {/* <!-- header --> */}
          <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
              Counter Application React Redux
          </h1>

        {/* <!-- counters --> */}
        <Counter/>

      </div>
    </Provider>
  );
}

export default App;
