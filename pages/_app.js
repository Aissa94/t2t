import "../sass/globals.scss";
import "swiper/css";
// import { AuthProvider } from "../context/AuthProvider";
import { AuthProvider } from '../context/auth_context'


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
