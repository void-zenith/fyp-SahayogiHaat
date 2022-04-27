import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./views/pages/HomePage";
import Login from "./views/pages/login";
import StartFundraiser from "./views/pages/StartFundraiser";
import BrowseFundraiser from "./views/pages/BrowseFundraiser";
import Howitworks from "./views/pages/Howitworks";
import Register from "./views/pages/Register";
import Registerasngo from "./views/pages/Registerasngo";

import Navbar from "./views/Components/Navbar";
import { useSelector } from "react-redux";
import Footer from "./views/Components/Footer";
import Contactus from "./views/pages/Contactus";
import Aboutus from "./views/pages/Aboutus";
import Faqs from "./views/pages/Faqs";
import HelpandSupport from "./views/pages/HelpandSupport";
import ScrollToTop from "./ScrollToTop";
import ViewFundraiser from "./views/pages/ViewFundraiser";
import AdminContainer from "./views/AdminPages/AdminContainer";
import ManageFundraiserRequest from "./views/AdminPages/Components/ManageFundraiserRequest";
import { ManageCategory } from "./views/AdminPages/Components/ManageCategory";
import { ManageDocuments } from "./views/AdminPages/Components/ManageDocuments";
import { Document } from "./views/AdminPages/Components/Document";
import { ManageUser } from "./views/AdminPages/Components/ManageUser";
import { User } from "./views/AdminPages/Components/User";
import ManageListFundraiserRequest from "./views/AdminPages/Components/ManageListFundraiserRequest";
const AppRouter = () => {
  let navbarview = useSelector((state) => state.navview.showSearchBar);
  let footerview = useSelector((state) => state.footview.showShortFooterBar);

  return (
    <BrowserRouter>
      <Navbar
        navbarview={`${navbarview ? "gotosearch" : "gotodefault"}`}
      ></Navbar>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/registerasngo" element={<Registerasngo />}></Route>

          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/startfundraiser" element={<StartFundraiser />}></Route>
          <Route path="/browsefundraiser" element={<BrowseFundraiser />}>
            <Route path=":fundraiser" element={<BrowseFundraiser />}></Route>
          </Route>
          <Route path="/viewfundraiser" element={<ViewFundraiser />}>
            <Route path=":fundraiser" element={<ViewFundraiser />}></Route>
          </Route>
          <Route path="/howitworks" element={<Howitworks />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/helpandsupport" element={<HelpandSupport />}></Route>
          <Route path="/admin" element={<AdminContainer />}>
            <Route
              path="/admin/managelistfundraiser"
              element={<ManageListFundraiserRequest />}
            >
              <Route
                path="/admin/managelistfundraiser/managefundraiserequest/:fundraiser"
                element={<ManageFundraiserRequest />}
              ></Route>
            </Route>
            <Route
              path="/admin/managecategory"
              element={<ManageCategory />}
            ></Route>
            <Route path="/admin/managedocuments" element={<ManageDocuments />}>
              <Route
                path="/admin/managedocuments/document/:document"
                element={<Document></Document>}
              ></Route>
            </Route>
            <Route path="/admin/manageuser" element={<ManageUser />}>
              <Route
                path="/admin/manageuser/user/:user"
                element={<User />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </ScrollToTop>

      <Footer type={`${footerview ? "shortfooter" : "defaultView"}`}></Footer>
    </BrowserRouter>
  );
};

export default AppRouter;
