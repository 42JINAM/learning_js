import { Outlet } from "react-router-dom";
import Nav from "../components/nav";

export default function Root() {
  return (
    <>
      <Nav></Nav>
      <div>Hi This is main page</div>
      <h1>메인 페이지야</h1>
      <Outlet></Outlet>
    </>
  )
}
