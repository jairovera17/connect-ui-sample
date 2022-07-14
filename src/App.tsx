import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppWrapper } from "./wrapper";
import { Main } from "./containers/Main";
import { RowSelection } from "./components/TableSimple/RowSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWrapper />}>
          <Route index element={<Main />} />
          <Route
            path={"table-simple/row-selection"}
            element={<RowSelection />}
          />
          {/*<Route path={"saved-properties"} element={<SavedProperties />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
