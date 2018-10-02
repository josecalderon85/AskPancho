module.exports.trigger = (sen) => (sen === 'calendar');
module.exports.resolve = () => new Promise((resolve) => {
  resolve(window.open(`http://localhost:3000/calendar`));

});
