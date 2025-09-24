import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

/* Routes */
import SubirPlatillo from "./admin/components/SubirPlatillo/SubirPlatillo";
import Home from "./admin/components/Home/Home";
import AdminLayout from "./admin/components/Admin-Layout/AdminLayout";
import FilteredCategory from "./components/Main/FilteredCategory";
import DishDetails from "./components/Main/DishDetails";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recetario" element={<Main />} />
        <Route path="/menu" element={<Main />} />
        <Route path="/menu/:categoryId" element={<FilteredCategory />} />
        <Route path="/menu/platillo/:dishId" element={<DishDetails />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="subir-platillo" element={<SubirPlatillo />} />
          <Route path="Home" element={<Home />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
