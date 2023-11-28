import Error404Wrapper from "./error404.ts";
import StyledLink from "./../StyledLink.ts";
import Button from "../Button/Button.tsx";
import {  useRouteError } from "react-router-dom";

function Error404() {
  const error:any = useRouteError();

  return (
    
    <Error404Wrapper>
      <p className="error-title">{error.status}</p>
      <p className="page-title">Sorry. we couldn't find this page</p>
      <p className="error-subtitle">
        But dont worry, you can find plenty of other things on our homepage
      </p>
      <StyledLink to="/">
        <Button icon="home" className="back-to-home-btn"> Back to homepage</Button>
      </StyledLink>
    </Error404Wrapper>
  );
}
export default Error404;
