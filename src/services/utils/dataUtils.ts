const convertPlantedTime = (lastPlanted: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const plantedDate = new Date(Number(lastPlanted));
  const month = months[plantedDate.getMonth()];
  const day = plantedDate.getDate();
  const year = plantedDate.getUTCFullYear();
  return `${month} ${day}, ${year}`;
};

export const DataUtils = {
  convertPlantedTime,
};
