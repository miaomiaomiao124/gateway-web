const r = require.context('./model', true, /\.js$/);
const generators = r.keys().map(key => r(key).default)
let json = {};
generators.forEach(res => {
  json = { ...json, ...res }
})
export default json