import * as React from "react";
import * as ReactDOM from "react-dom";

import { Canvas } from "./components/game_canvas";

ReactDOM.render(
    <Canvas text="Howdy" />,
    document.getElementById("example")
);