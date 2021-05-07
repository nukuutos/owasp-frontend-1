import SignIn from './pages/sign-in';
import Alert from './utils/alert';
import { useState } from 'react';

const App = () => {
  const [alerts, setAlerts] = useState([]);

  return (
    <div className="container">
      <SignIn setAlerts={setAlerts} />
      <Alert alertsState={[alerts, setAlerts]} />
    </div>
  );
};

export default App;
