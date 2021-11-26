export const AddIdToData = (data) =>
  data.map((item) => {
    const id = Number(item.url.match(/\d+/)[0]);
    return { ...item, id };
  });
