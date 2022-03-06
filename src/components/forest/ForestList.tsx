import { useState, useEffect } from "react";
import { useQuery } from "react-query";
// bootstrap
import { Container } from "react-bootstrap";
// components
import ForestUserControls from "./controls/ForestUserControls";
import ForestListItem from "./ForestListItem";
// services
import axios from "axios";
import { AuthUtils } from "../../services/utils/authUtils";

const ForestList = () => {
  const [uid, setUid] = useState<number>(Number(localStorage.getItem("id")));

  useEffect(() => {
    setUid((uid) => Number(localStorage.getItem("id")));
  }, []);

  const { isLoading, isError, data } = useQuery("fetchUserTrees", async () => {
    const isAuthenticated = AuthUtils.isAuthenticated();
    if (isAuthenticated) {
      const token = AuthUtils.getToken();
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(
        `${process.env.REACT_APP_API}/trees/user/${uid}`,
        config
      );
      return res.data;
    }
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <Container>
      <ForestUserControls />
      {data &&
        data.map(
          (
            tree: {
              id: number;
              lastPlanted: string;
              name: string;
              meaning: string;
            },
            idx: number
          ) => {
            console.log(tree);
            return (
              <ForestListItem
                key={idx}
                id={tree.id}
                name={tree.name}
                meaning={tree.meaning}
                lastPlanted={tree.lastPlanted}
              />
            );
          }
        )}
    </Container>
  );
};

export default ForestList;
