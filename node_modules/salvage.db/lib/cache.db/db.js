/*
Light weight, cachable engine for storing data to a cache.
*/
const CACHE = {};
class Cache {
  /**
   *
   * @param {Object} options The options
   * @param {Array} options.servers A list of servers
   *
   */
  constructor(options) {
    options.servers.map((server) => (CACHE[server] = {}));
  }
  /**
   * @method
   * @param {Object} options The options
   * @param {String} options.key The key
   * @param {String} options.value The value you wish to save to the key
   * @param {String} options.server The server you wish to save the data to
   */
  async set() {
    return console.log(CACHE);
  }
}
