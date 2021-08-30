// import Bar from "../components/Bar";

// import Email from "../components/userSettings/Email";
// import EmailDetail from "../components/userSettings/email/EmailDetail";
// import Profile from "../components/userSettings/Profile";
// import ProfileEdit from "../components/userSettings/profile/ProfileEdit";
// import ProfilePreview from "../components/userSettings/profile/ProfilePreview";
// import UserSettings from "../components/UserSettings";

const routes = [
  {
    path: '/user/:id',
    props: true,
    component: () => import("../components/User")
  }
];
export default routes;