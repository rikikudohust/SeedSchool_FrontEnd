import React from "react";
import Login from "./components/general/Login";
import Nav from "./components/general/Nav";
import Admin from "./components/admin/Admin";
import Parents from "./components/parents/Parents";
import Teachers from "./components/teachers/Teachers";
import EditMenu from "./components/admin/EditMenu";
import AddTeacher from "./components/admin/AddTeacher";
import Calendar from "./components/parents/Calendar";
import ProfileTeacher from "./components/general/ProfileTeacher";
import AddActivities from "./components/admin/AddActivities";
import Page from "./components/link/Page";
import MainPage from "./components/general/MainPage";
import ProfileStudent from "./components/general/ProfileStudent";
import AddCheck from "./components/teachers/AddCheck";

function App() {
  return (
    <div>
      {/* <AddCheck /> */}
      <Parents />
    </div>
  );
}

export default App;
