import { gql, useQuery } from "@apollo/client";
import React from "react";
import GridCards from "../../components/GridCards/GridCards";
import Image from "../../components/image/Image";
import PageSection from "../../components/page-section/PageSection";

const Blogs = ({ pageCode }) => {
  const { error, data } = useQuery(BLOGS, {
    variables: {
      where: { code_contains: pageCode },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const [image] = data.simplePageCollection.items;

  return (
    <div>
      {/* <Image description={image.description} url={image.image.url} /> */}
      <PageSection sectionCode="s1" code={pageCode}>
        <GridCards code={`${pageCode}-s1`} variant="blog" />
      </PageSection>
    </div>
  );
};

export default Blogs;

const BLOGS = gql`
  query simplePageCollection($where: SimplePageFilter) {
    simplePageCollection(where: $where) {
      items {
        code
        name
        description
        image {
          url
        }
      }
    }
  }
`;
