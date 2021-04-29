// import "../ReactotronConfig";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { wrapper } from "../store/store";

// import Reactotron from "reactotron-react-js";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Reactotron.configure() // we can use plugins here -- more on this later
//   .connect(); // let's connect!

export default wrapper.withRedux(MyApp);
