import "../styles/globals.css";
import {StoreProvider} from "../shared";

function MyApp({ Component, pageProps }) {
   return (
      <div className="">
         <StoreProvider>
             <Component {...pageProps} />
         </StoreProvider>
      </div>
   );
}

export default MyApp;
