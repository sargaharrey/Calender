import { Routes, Route, useLocation } from "react-router-dom";
import {
  Home,
  AboutUs,
  Services,
  Team,
  Blog,
  BlogItem,
  JoinUs,
  ContactUs,
  Login,
  ResetPassword,
  Register,
  RegisterComponent,
  Consultation,
} from "./pages/visitorsPortal";
import {
  Case,
  Addcase,
  AddSession,
  ExchangeRequest,
  Customers,
  CustomerDetails,
} from "./pages/staffPortall";
import { Footer, Navbar } from "./components";
import CasesPage from "./pages/staffPortall/CasesPage/CasesPages";
import ScrollToTop from "./utils/ScrollToTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";
import "./index.css";
import HolyReq from "./pages/staffPortall/HolyReq";
import Dashboard from "./pages/staffPortall/Dashboard";
import AddSessionAns from "./pages/staffPortall/AddSessionAns";
import MyAppointmetns from "./pages/staffPortall/MyAppointments";
import Reviews from "./pages/staffPortall/Reviews";
import Sessions from "./pages/staffPortall/Sessions/index";
import Tasks from "./pages/staffPortall/Tasks";
import SessionsList from "./pages/staffPortall/SessionsList";
import CaseSessions from "./pages/staffPortall/CaseSessions";
import MyCases from "./pages/staffPortall/MyCases";
import SessionsFrom from "./pages/staffPortall/SessionsFrom";
import Notification from "./pages/staffPortall/Notification";
import Archive from "./pages/staffPortall/Archive";
import Query from "./pages/staffPortall/Query";
import JudicialAgencies from "./pages/staffPortall/JudicialAgencies";
import RealEstate from "./pages/staffPortall/RealEstate";
import CommercialFiles from "./pages/staffPortall/CommercialFiles";
import SubCommercial from "./pages/staffPortall/SubCommercial";
import { Context } from "./context";
import { useEffect, useState } from "react";
import { httpGetRequest } from "./networking";
import endpoints from "./constants/endpoints";

const App = () => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("@token") || undefined
  );
  const [userData, setUserData] = useState({});
  const location = useLocation()


  const setAuthUserData = async (data) => {
    if (data.token) {
      setAuthToken(data.token);
      setUserData(data);
      localStorage.setItem("@token", data.token);
      return true;
    } else {
      localStorage.setItem("@token", undefined);
      setAuthToken(undefined);
      setUserData(undefined);
      return false;
    }
  };

  useEffect(() => {
    if (authToken) {
      httpGetRequest(endpoints.me, {}, authToken)
        .then((response) => {
          if (response.status) {
            delete response.status;
            console.log(response);
            setUserData(response);
          } else {
            setAuthToken(undefined);
          }
        })
        .catch(() => setAuthToken(undefined));
    }
  }, [authToken, location]);

  const values = {
    authToken,
    userData,
    setAuthUserData,
  };

  return (
    <Context.Provider value={values}>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogItem />} />
          <Route path="/join_us" element={<JoinUs />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:type" element={<RegisterComponent />} />
          <Route path="/order/consultation" element={<Consultation />} />
          {/****** Staff section */}
          <Route path="/staff" element={<Dashboard />} />
          <Route path="staff/notification" element={<Notification />} />
          <Route path="/staff/archive" element={<Archive />} />
          <Route path="/staff/case" element={<Case />} />
          <Route path="/staff/reviews" element={<Reviews />} />
          <Route path="/staff/sessions" element={<Sessions />} />
          <Route path="/staff/sessionsfrom" element={<SessionsFrom />} />
          <Route path="/staff/CaseSessions" element={<CaseSessions />} />
          <Route path="/staff/query" element={<Query />} />
          <Route
            path="/staff/query/judicialagencies"
            element={<JudicialAgencies />}
          />
          <Route
            path="/staff/query/realestateinstruments"
            element={<RealEstate />}
          />
          <Route
            path="/staff/query/commercialfiles"
            element={<CommercialFiles />}
          />
          <Route
            path="/staff/query/subcommercialfiles"
            element={<SubCommercial />}
          />
          <Route path="/staff/sessionslist" element={<SessionsList />} />
          <Route path="/staff/tasks" element={<Tasks />} />
          <Route path="/staff/appointments" element={<MyAppointmetns />} />
          <Route path="/staff/mycases" element={<MyCases />} />
          <Route path="/staff/customers" element={<Customers />} />
          <Route path="/staff/customers/:id" element={<CustomerDetails />} />
          <Route path="/staff/holyreq" element={<HolyReq />} />
          <Route path="/staff/case" element={<CasesPage />} />
          <Route path="/staff/addCase" element={<Addcase userData={userData} />} />
          <Route path="/staff/addSession" element={<AddSession />} />
          <Route path="/staff/addSessionAns" element={<AddSessionAns />} />
          <Route path="/staff/exchangeRequest" element={<ExchangeRequest />} />          
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
