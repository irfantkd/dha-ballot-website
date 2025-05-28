import AOS from 'aos';
import 'aos/dist/aos.css';
import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';
import WhatsAppButton from './ui/WhatsappButton';
import 'react-toastify/dist/ReactToastify.css';

AOS.init();

function App() {
  return (
    <>
      <WhatsAppButton phoneNumber="+92 341 1111518" />
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
