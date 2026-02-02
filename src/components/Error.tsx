import { ReactElement } from "react";
import { useRouteError } from "react-router";

function Error(): ReactElement {
  const error = useRouteError();

  return <div>{`Error: ${error}`}</div>;
}

export default Error;
