import "./App.css";
import Store from "./Store";
import Header from "./Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPage from "./NewPage";
import Page from "./Page";

function App() {
  return (
    <Store>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/">
              <Route index element={<div>"Home Page"</div>} />
              <Route path="page" element={<Page id={1}></Page>} />
              <Route path="/page/:id" element={<NewPage></NewPage>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Store>
  );
}

export default App;
