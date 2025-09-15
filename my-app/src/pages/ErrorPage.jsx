import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      { error.status === 404 
        ? <h1>Page Not Found</h1> 
        : <div>{JSON.stringify(error)}</div>
      }
    </div>
  );
}

export default ErrorPage;