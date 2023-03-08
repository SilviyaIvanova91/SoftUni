import { Link, NavLink } from "react-router-dom";
import { Navigation } from "./Navigation";

export const MainNavigaetion = () => {
  return (
    <Navigation>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/characters">Characters</NavLink>
      </li>
    </Navigation>
  );
};

// export const MainNavigaetion = () => {
//   return (
//     <nav className={styles.navigation}>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {/* <li>
//           <NavLink
//             style={({ isActive }) => ({ color: isActive ? "purple" : "white" })}
//             to="/"
//           >
//             Home
//           </NavLink>
//         </li> */}
//         {/* <li>
//           <NavLink
//             className={({ isActive }) => isActive ? styles["nav-active"] : ''}
//             to="/"
//           >
//             Home
//           </NavLink>
//         </li> */}

//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/characters">Characters</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };
