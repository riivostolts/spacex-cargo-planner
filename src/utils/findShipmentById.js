export default (sourceArr, targetId) => {
  return sourceArr.find(el => el.id === targetId);
};