import './App.css';

import QueryInput from 'features/Query/QueryInput/QueryInput';
import { QueryProvider } from "features/Query/Query.context";
import QueryList from "features/Query/QueryList/QueryList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <QueryProvider>
          <QueryInput />
          <QueryList />
        </QueryProvider>
      </div>
    </div>
  );
}

export default App;
