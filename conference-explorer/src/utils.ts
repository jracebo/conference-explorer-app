/*
DEV NOTES:
 - Keep generic utilities here. Name them as descriptive as possible.
*/

// Format Date from 2020-06-01 to June 01, 2020
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
