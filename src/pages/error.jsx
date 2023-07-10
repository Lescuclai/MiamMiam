import { useRouteError, NavLink } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h2>Sorry, gluttony has lost you in the secret forest of Hansel et Gretel, <NavLink to={`/`}>Go Back</NavLink> quickly not to be eaten by the witch.</h2>
      <img src="/Haensel_und_Gretel-2.jpg"></img>
      
    </div>
  );
}