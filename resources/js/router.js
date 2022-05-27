import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);
const App = () => import("./components/website/App");
const Admin = () => import("./components/admin/Admin");
const Dashboard = () => import("./components/Dashboard");
const Home = () => import("./components/website/Home");
const Contact = () => import("./components/website/Contact");
const Login = () => import("./components/website/Login");
const Register = () => import("./components/website/Register");
const NotFound = () => import("./components/NotFound");
const About = () => import("./components/website/About");
const opts = {
    mode: "history",
    linkActiveClass: 'font-semibold',
    routes: [
        {
            path:"*",
            component: NotFound,
        },
        {
            path: "/",
            component: App,
            name: "main-website",
            children: [
                { path: "/", component: Home, name: "home" },
                { path: "/contact", component: Contact, name: "contact",  },
                { path: "/login", component: Login, name: "login",  },
                { path: "/register", component: Register, name: "register",  },
                { path: "/about", component: About, name: "about",  },


            ],

        },
        {
            path: "/admin",
            component: Admin,
            name: "admin-panel",
        },
            {
             path: "/dashboard",
             component: Dashboard,
             name: "dashboard",
            },
        },
    ],
};
export default new VueRouter(opts);
