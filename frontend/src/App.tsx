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
import { MenuProvider } from "./MenuProvider";
import ScrollToTop from "./ScrollToTop";
import { DishesProvider } from "./DishContext";
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  return (
    <MenuProvider>
      <ScrollToTop />
      <DishesProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/recetario" element={<Main />} />
          <Route path="/menu" element={<Main />} />
          <Route path="/menu/:categoryId" element={<FilteredCategory />} />
          <Route path="/menu/platillo/:nombre" element={<DishDetails />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="subir-platillo" element={<SubirPlatillo />} />
            <Route path="Home" element={<Home />}></Route>
          </Route>
        </Routes>
      </DishesProvider>
      <Footer />
    </MenuProvider>
  );
}
export default App;
