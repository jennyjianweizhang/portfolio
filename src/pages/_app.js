import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NavigationDots from "../components/Navbar/NavigationDot";
import "../../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <NavigationDots />
      <div>
        <Component {...pageProps} />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
