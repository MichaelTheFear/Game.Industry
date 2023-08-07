import "./App.css";
import {Link} from "react-router-dom";

function App() {
  // class for rounded corners on cards: "rounded-lg"
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Link
          to="/cah"
          className="flex justify-center items-center rounded-lg bg-black hover:bg-white text-white hover:text-black transition-colors duration-300 shadow-md border-2 border-black text-5xl w-1/4 h-1/5"
        >
          CAH
        </Link>
      </div>
    </div>
  );
}

export default App;
