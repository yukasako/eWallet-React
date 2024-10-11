import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Home from "./routes/Home";
import EditCard from "./routes/EditCard";
import Setting from "./routes/Setting";
import AddCard from "./routes/AddCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/addCard" element={<AddCard />} />
      <Route path="/card/:id" element={<EditCard />} />
      <Route path="/settings" element={<Setting />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
