// components
import ForestListItem from "./ForestListItem";

const ForestList = () => {
  // temporary placeholder items until we actually have some mock data
  const placeholderItems = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      {placeholderItems.map((item) => {
        return <ForestListItem />;
      })}
    </>
  );
};

export default ForestList;
