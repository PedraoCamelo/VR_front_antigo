import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//2-configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Disciplinas from "./pages/Disciplinas.jsx";
import Atividades from "./pages/Atividades.jsx";
import Notas from "./pages/Notas.jsx";
import Calendario from "./pages/Calendario.jsx";
import Biblioteca from "./pages/Biblioteca.jsx";
import FaleConosco from "./pages/FaleConosco.jsx";
import ChatTurma from "./pages/ChatTurma.jsx";
import SobreNos from "./pages/SobreNos.jsx";
import Professores from "./pages/Professores.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";



// const router = createBrowserRouter([

//   {
//     path:'/',
//     element:<Home/>,
//   },
//   {
//     path:'/professores',
//     element:<Professores/>,

//   },

// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //3-pagina de erro do router
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/professores",
        element: <Professores />,
      },
      {
        path: "/disciplinas",
        element: <Disciplinas />,
      },
      {
        path: "/atividades",
        element: <Atividades />,
      },
      {
        path: "/notas",
        element: <Notas />,
      },
      {
        path: "/calendario",
        element: <Calendario />,
      },
      {
        path: "/biblioteca",
        element: <Biblioteca />,
      },
      {
        path: "/fale_conosco",
        element: <FaleConosco />,
      },
      {
        path: "/chat_turma",
        element: <ChatTurma />,
      },
      {
        path: "/sobre_nos",
        element: <SobreNos />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/registrar",
      //   element: <Registro />,
      // },
      //5- nested routes - identificandor unico - rotas dinamicas
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
