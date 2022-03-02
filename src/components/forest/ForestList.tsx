import { useState, useEffect } from "react";
import { useQuery } from "react-query";
// bootstrap
import { Container } from "react-bootstrap";
// components
import ForestUserControls from "./controls/ForestUserControls";
import ForestListItem from "./ForestListItem";
// services
import TreeService from "../../services/treeService/TreeService";

const ForestList = () => {
  const [uid, setUid] = useState<number>(Number(localStorage.getItem("id")));

  useEffect(() => {
    setUid((uid) => Number(localStorage.getItem("id")));
  }, []);

  const fetchUserTrees = () => {
    console.log("Fetching for user id: " + uid);
    TreeService.fetchUserTrees(uid);
  };

  const { isLoading, isError, data } = useQuery(
    "fetchUserTrees",
    fetchUserTrees
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <Container>
      <ForestUserControls />
      {console.log(data)}
      {/* {data &&
        data.map(
          (
            item: { id: number; name: string; meaning: string },
            idx: number
          ) => {
            return (
              <ForestListItem
                id={item.id}
                name={item.name}
                meaning={item.meaning}
                key={idx}
              />
            );
          }
        )} */}
    </Container>
  );
};

export default ForestList;
