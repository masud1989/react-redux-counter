import { Provider } from "react-redux";
import DynamicHooksCounter from "./components/DynamicHooksCounter";
import Counter from "./components/Counter";
import HooksCounter from "./components/HooksCounter";
import store from "./redux/store";
import VariableCounter from "./components/VariableCounter";


function App() {
  return (
    <Provider store = {store} >
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        {/* <!-- header --> */}
          <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
              Counter Application React Redux
          </h1>

        {/* <!-- counters --> */}
        {/* <Counter id='1' /> */}
        <HooksCounter />
        <DynamicHooksCounter />
        <VariableCounter />
        <VariableCounter dynamic />
        

      </div>
    </Provider>
  );
}

export default App;
