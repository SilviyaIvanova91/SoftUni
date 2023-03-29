import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export const RouteGuard = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};

// export const RouteGuard = () => {
//   const { isAuthenticated } = useAuthContext();
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <Outlet /> //<GameDetails /> идва на мястото на outlet /все едно
//   );
// };

// export const RouteGuard = ({ children }) => {
//   const { isAuthenticated } = useAuthContext();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return <>{children}</>;
// };
