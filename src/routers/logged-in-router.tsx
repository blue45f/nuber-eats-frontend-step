import {gql, useQuery} from "@apollo/client";
import React from "react";
import {BrowserRouter as Router, Navigate, Route,} from "react-router-dom";
import {Header} from "../components/header";
import {Restaurants} from "../pages/client/restaurants";
import {meQuery} from "../__generated__/meQuery";

const ClientRoutes = [
  <Route path="/">
    <Restaurants/>
  </Route>,
];

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;

export const LoggedInRouter = () => {
  const {data, loading, error} = useQuery<meQuery>(ME_QUERY);
  if (!data || loading || error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }
  return (
    <Router>
      <Header/>
      <Router>
        {data.me.role === "Client" && ClientRoutes}
        <Route path="/potato" element={<Navigate replace to="/"/>}></Route>
      </Router>
    </Router>
  );
};