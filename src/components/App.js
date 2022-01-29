import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navigate to page two</Li>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click me!</button>
      <Link to="/">Navigate to page one</Link>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact={true} component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
