export default () => {
  window.ymaps.ready(() => {
    new window.ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 7
    });
  });
};
