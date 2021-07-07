/* eslint-disable class-methods-use-this */
/**
 * Abstract base class to be implemented by all connectors.
 */
export class Registry {
  constructor(configElem) {
    this._prefix = configElem.getAttribute('prefix');
    this._config = {
        name: configElem.getAttribute('name'),
        properties: {}
    };
    this._register = this._config.name;
  }

  get register() {
      return this._register;
  }

  /**
   * Return a descriptive name for the registry
   * 
   * @returns {String} registry name
   */
  get name() {
    return this._register;
  }

  /**
   * Query the authority and return a RegistryResult.
   *
   * @param {String} key the search string
   */
  query(key) {
    throw new Error('Method query not implemented');
  }

  /**
   * Retrieve information about a registry entry and display it
   * using the given container.
   * 
   * @param {String} id the id to look up
   * @param {HTMLElement} container reference to an element which should be used as container for displaying the information
   * @returns {Promise} a promise
   */
  info(id, container) {
      container.innerHTML('not implemented');
      return Promise.resolve();
  }

    /**
     * Return an XML fragment for the specified item to be inserted
     * into the document.
     *
     * @param item the item to output
     */
    format(item) {
        return {
            strings: item.strings,
            properties: {
                ref: item.id
            }
        };
    }
}