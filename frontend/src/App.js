import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Homepage from "./pages/Homepage";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from "./pages/Dashboard";
import Dash from "./pages/Dash";
import Sidebar from "./components/Sidebar";
import AddPatient from "./pages/patients/AddPatient";
import ManagePatients from "./pages/patients/ManagePatients";
import AddSoapNote from "./pages/doctor/AddSoapNote";
import LabRequestForm from "./pages/doctor/LabRequestForm";
import ManageSoapNotes from "./pages/doctor/ManageSoapNotes";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  // const HOST_URL = "https://beyondhealthcare.com.ng/api";

  const company = "Beyond's Healthcare and Fertility Center"

  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Navbar />}> 
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact />} />

            <Route path="*" element={<main style={{ padding: "1rem" }}>
              <h3>Error 404! Page doesn't exist</h3><p>Oops! You landed on a page that does not exist</p></main>}
            />
          </Route>
          
          <Route path="/login" element={<LoginPage company={company} />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />   
            <Route element={<Sidebar  />}> 
              <Route path="/dash" element={<Dash />} /> 
              <Route path="/add-patient" element={<AddPatient />} /> 
              <Route path="/manage-patients" element={<ManagePatients />} /> 
              <Route path="/add-soap-note" element={<AddSoapNote />} /> 
              <Route path="/soapnotes" element={<ManageSoapNotes />} /> 
              <Route path="/lab-req-form-doctor" element={<LabRequestForm />} /> 
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
  );
}
export default App;



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoutes from './utils/PrivateRoutes';
// import { AuthProvider } from './context/AuthContext';
// import './App.css';
// import Frontpage from "./pages/Frontpage";
// import LoginPage from './pages/LoginPage';
// import Home from './pages/Home';
// import Admin from './pages/Admin';
// import RegisterPage from './pages/RegisterPage';
// // import Sidebar from "./components/Sidebar";

// function App() {
//   const caption = 'Project';

//   return (
//     <>
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route exact path="/" element={<Frontpage />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           {/* <Route path="/add-patient" element={<AddPatient />} /> */}
//           <Route path="*" element={<main style={{ padding: "1rem" }}>
//               <h3>Error 404! Page doesn't exist</h3><p>Oops! You landed on a page that does not exist</p></main>}
//           />
          
//           <Route element={<PrivateRoutes />}>
//             {/* <Route exact path="/" element={<HomePage caption={caption} />} /> */}
//             {/* <Route path="/dashboard" element={<Dashboard caption={caption} />} /> */}
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//     </>
//   );
// }
// export default App;