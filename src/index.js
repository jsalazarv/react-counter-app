import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import CounterApp from "./components/CounterApp";


const root = createRoot(document.getElementById('root'));

root.render(<CounterApp value={0}/>);
