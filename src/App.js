import { useRef, useState } from "react";
import "./App.css";

const items = ["cars", "bikes", "cycles", "plane"];

//useClickOutside(ref,callback,visible)
function App() {
  const [selectedIndex, setselectedIndex] = useState(0);
  const [visibility, setvisibility] = useState(false);

  const dropdownref = useRef();

  const showDropDown = () => {
    setvisibility(!visibility);
  };

  const hideDropDown = () => {
    setvisibility(false);
  };
  const select = (index) => {
    hideDropDown();
    setselectedIndex(index);
  };
  return (
    <div className="flex justify-center">
      <div>
        <button
          className="bg-slate-300 px-4 h-8 w-16 border-2 border-blue-400 rounded-md"
          onClick={showDropDown}
        >
          {items[selectedIndex]}
        </button>

        {items.map((item, index) => (
          <>
            {index !== selectedIndex && (
              <ul
                ref={dropdownref}
                className={`  ${visibility ? "invisible" : "visible"}`}
                key={index}
              >
                <li className="cursor-pointer " onClick={select(index)}>
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
