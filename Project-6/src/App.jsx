import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transactions/TransactionsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/transactions",
      element: <TransactionPage/>,
    },
    {
      path: "/support",
      element: <Support/>,
    }
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
