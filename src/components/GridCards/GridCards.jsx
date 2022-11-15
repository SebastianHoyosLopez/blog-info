import { gql, useQuery } from "@apollo/client";
import React from "react";
import Card from "../card/Card";

const GridCards = ({ code, variant }) => {
  const { error, data } = useQuery(GRID_CARDS_QUERY, {
    variables: {
      where: { code_contains: code },
    },
  });
  console.log(code);

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }

  if (!data) {
    return <p>No Data!</p>;
  }

  console.log(data.sImpleBlogsCollection.items);
  const cards = data.sImpleBlogsCollection.items;

  return (
    <div>
      {cards &&
        cards.map((cardInfo, index) => (
          <Card
            imageUrl={cardInfo.mainPicture?.url}
            variant={variant}
            code={cardInfo.code}
            title={cardInfo.title}
            shortDescription={cardInfo.shortDescription}
          />
        ))}
    </div>
  );
};

export default GridCards;

const GRID_CARDS_QUERY = gql`
  query sImpleBlogsCollection($where: SImpleBlogsFilter) {
    sImpleBlogsCollection(where: $where) {
      items {
        title
        code
        shortDescription
        mainPicture {
          url
        }
      }
    }
  }
`;
