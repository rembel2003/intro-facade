import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import { ToastContainer } from 'react-toastify';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head'
import {useRouter} from 'next/router';
import {IntlProvider} from 'use-intl';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const {messages, now, ...rest} = pageProps;
  return (
    <div>
      <Head>
        <title>IntroFacade -  Lightweight, durable, and innovative solutions.</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IntlProvider
            locale={router.locale}
            messages={messages}
          >
            <Component {...pageProps} />
          </IntlProvider>
        </PersistGate>
      </Provider>
      <ToastContainer />
    </div>

  )
}

export default MyApp;
