import './App.css';
import BackToTop from './common/BackToTop';
import DataSecurity from './component/DataSecurity';
import FederatedSearch from './component/FederatedSearch';
import Footer from './component/Footer';
import FormValidation from './component/FormValidation';
import FrequentalyAskQuestions from './component/FrequentalyAskQuestions';
import Hero from './component/Hero';
import KeySemantics from './component/KeySemantics';
import Work from './component/Work';

function App() {
  return (
    <>
      <>
        <Hero />
        <Work />
        <KeySemantics />
        <FrequentalyAskQuestions />
        <FederatedSearch />
        <DataSecurity />
        <FormValidation />
        <Footer />
      </>
      <BackToTop/>
    </>
  );
}

export default App;
