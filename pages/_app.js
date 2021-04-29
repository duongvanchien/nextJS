// import "../ReactotronConfig";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { wrapper } from "../store/store";

// import Reactotron from "reactotron-react-js";
// if (!__SERVER__) {
//   const Reactotron = require('reactotron-react-js');
//   Reactotron.configure() // we can use plugins here -- more on this later
//     .connect(); // let's connect!
// }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
