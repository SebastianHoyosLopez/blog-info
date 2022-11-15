import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";

const Navbar = () => {
  const { error, data } = useQuery(MENU_NAVIGARIONS_QUERY, {
    variables: {
      order: "sort_ASC",
    },
  });
  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const { items } = data.menuNavigationCollection;

  return (
    <nav role="navigation" className="Navbar" aria-label="Main">
      <ul className="nav-items">
        {items &&
          items.map((item, index) => (
            <Link to={item.menuType === "SimplePageLink"
              ? `/page?code=${item.menuPath}`
              : item.menuPath
            }
             className="nav-link" key={index}>
              {item.name}
            </Link>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const MENU_NAVIGARIONS_QUERY = gql`
  query menuNavigationCollection($order: [MenuNavigationOrder]) {
    menuNavigationCollection(order: $order) {
      items {
        code
        name
        menuPath
        menuType
      }
    }
  }
`;
