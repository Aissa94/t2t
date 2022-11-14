import "../sass/globals.scss";
import "swiper/css";
import { AuthProvider } from "../context/AuthProvider";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
