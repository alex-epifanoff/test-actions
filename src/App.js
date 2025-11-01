import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './Calculator';
import WebSearch from './WebSearch';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/websearch">Web Search</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/websearch" element={<WebSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
