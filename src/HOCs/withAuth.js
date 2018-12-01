import React from "react";

const withAuth = (LoggedComponent, NotLoggedComponent, user) => {
  const isLogged = Object.keys(user).length !== 0;
  return isLogged ? <LoggedComponent /> : <NotLoggedComponent />;
};
export default withAuth;
