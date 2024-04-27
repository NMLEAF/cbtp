import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "./components/Admin/AdminSidebar/AdminSidebar";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import AdminRegistrar from "./pages/Admin/Registrar/AdminRegistrar";
import AdminTeacher from "./pages/Admin/Teachers/AdminTeacher";
import AdminStudents from "./pages/Admin/Students/AdminStudents";
import Attendance from "./pages/Admin/Attendance/Attendance";
import AdminParents from "./pages/Admin/Parents/AdminParents";
import Classes from "./pages/Admin/Classes/Classes";
import RegistrarDashboard from "./pages/Registrar/RegistrarDashboard/RegistrarDashboard";
import RegistrarStudent from "./pages/Registrar/Students/RegistrarStudent";
import RegistrarParents from "./pages/Registrar/Parents/RegistrarParents";
import RegistrarRegistration from "./pages/Registrar/Registration/RegistrarRegistration";
import ToastNotification from "./components/Toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ToastNotification />
        <Routes>
          {/* Admin */}

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/registrars" element={<AdminRegistrar />} />
          <Route path="/admin/teachers" element={<AdminTeacher />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          <Route path="/admin/attendance" element={<Attendance />} />
          <Route path="/admin/parents" element={<AdminParents />} />
          <Route path="/admin/classes" element={<Classes />} />

          {/* Registrar */}

          <Route path="/registrar" element={<RegistrarDashboard />} />
          <Route path="/registrar/students" element={<RegistrarStudent />} />
          <Route path="/registrar/parents" element={<RegistrarParents />} />
          <Route
            path="/registrar/registration"
            element={<RegistrarRegistration />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
