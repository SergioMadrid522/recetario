import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

/* Routes */
import SubirPlatillo from "./components/pages/admin/components/SubirPlatillo/SubirPlatillo";
import Home from "./components/pages/admin/components/Home/Home";
import AdminLayout from "./components/pages/admin/components/Admin-Layout/AdminLayout";
import FilteredCategory from "./components/Main/FilteredCategory";
import DishDetails from "./components/Main/DishDetails";
import { MenuProvider } from "./components/utils/MenuProvider";
import ScrollToTop from "./components/utils/ScrollToTop";
import { DishesProvider } from "./components/utils/DishContext";
import { ModalProvider } from "./components/utils/ModalProvider";
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
      <ModalProvider>
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
      </ModalProvider>
    </MenuProvider>
  );
}
export default App;
