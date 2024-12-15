import './App.css';
import DataSecurity from './component/DataSecurity';
import FederatedSearch from './component/FederatedSearch';
import FrequentalyAskQuestions from './component/FrequentalyAskQuestions';

function App() {
  return (
    <>
      <FrequentalyAskQuestions/>
      <FederatedSearch />
      <DataSecurity/>
    </>
  );
}

export default App;
