import React from "react";

const withAuth = (LoggedComponent, NotLoggedComponent, userId) => {
  const isLogged = userId !== 0;
  return isLogged ? <LoggedComponent /> : <NotLoggedComponent />;
};
export default withAuth;
