import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MessageArea from "./components/MessageArea";

function App() {
  return (
    <div className="app-container darkmode">
      <div className="main-container">
        <Header />
        <MessageArea />
      </div>
    </div>
  );
}

export default App;
