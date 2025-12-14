import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SubirPlatillo from "./components/pages/admin/components/SubirPlatillo/SubirPlatillo";
import Home from "./components/pages/admin/Home";
import AdminLayout from "./components/pages/admin/AdminLayout";
import FilteredCategory from "./components/Main/FilteredCategory";
import DishDetails from "./components/Main/DishDetails";
import ScrollToTop from "./components/utils/ScrollToTop";
import { MenuProvider } from "./components/utils/MenuProvider";
import { DishesProvider } from "./components/utils/DishContext";
import { ModalProvider } from "./components/utils/ModalProvider";
export default function AppContent() {
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
