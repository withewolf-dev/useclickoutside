import { useState } from "react";
import "./App.css";

const items = ["cars", "bikes", "cycles", "plane"];
function App() {
  const [selectedIndex, setselectedIndex] = useState(0);
  const [visibility, setvisibility] = useState(false);
  return (
    <div className="flex justify-center">
      <div>
        <button
          className="bg-slate-300 px-4 h-8 w-16 border-2 border-blue-400 rounded-md"
          onClick={() => {
            setvisibility(!visibility);
          }}
        >
          {items[selectedIndex]}
        </button>

        {items.map((item, index) => (
          <>
            {index !== selectedIndex && (
              <ul
                className={`  ${visibility ? "invisible" : "visible"}`}
                key={index}
              >
                <li
                  className="cursor-pointer "
                  onClick={() => {
                    setselectedIndex(index);
                    setvisibility(false);
                  }}
                >
                  {item}
                </li>
              </ul>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
