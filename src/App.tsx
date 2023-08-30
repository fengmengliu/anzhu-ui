import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello world </h1>
        <h2> Hello world </h2>
        <Button autoFocus>hello anzhu</Button>
        <Button
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          hello2 anzhu
        </Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large} disabled>
          large default button
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>
          large default button
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          large primary button
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          small danger btn
        </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">
          hello link
        </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>
          disabled link
        </Button>
      </header>
    </div>
  );
}

export default App;
