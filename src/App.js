import { ToastContainer } from "react-toastify";
import AllRoutes from "./routes";
import GlobalStyles from "./styles/global"

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
      />
      <GlobalStyles/>
      <AllRoutes/>
      
    </>
  );
}

export default App;
