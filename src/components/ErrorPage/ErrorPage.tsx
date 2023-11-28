import ErrorPageWrapper from "./errorPage.js";
import StyledLink from "../StyledLink.js";
import Button from "../Button/Button.js";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error: any = useRouteError();
console.log(error)
  return (

    <ErrorPageWrapper>
      <p className="error-title">{error.status}</p>
      <p className="page-title">Sorry. we couldn't find this page</p>
      <p className="error-subtitle">
        But dont worry, you can find plenty of other things on our homepage
      </p>
      <StyledLink to="/">
        <Button icon="home" className="back-to-home-btn"> Back to homepage</Button>
      </StyledLink>
    </ErrorPageWrapper>
  );
}
export default ErrorPage;
