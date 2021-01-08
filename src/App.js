import Sidebar from "./components/sidebar.component.jsx";
import "./App.css";
import Chat from "./components/chat.component.jsx";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
