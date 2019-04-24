import axios from 'axios';
import csrf from './csrf';

class BaseProvider {
  constructor() {
    this.CSRFToken = csrf.getCSRFToken();
  }

  get provider() {
    return axios.create({
      withCredentials: true,
      headers: {
        "X-CSRFToken": this.CSRFToken,
      },
    });
  }

  refreshCSRFToken = () => {
    this.CSRFToken = csrf.getCSRFToken();

    return;
  };

  sendDataByBeacon = (url, data = null) => {
    /*
     * 1.When you want to use this method, turn off API's CSRF check and ensure user safety
     * 2.The type of param data must be ArrayBufferView, Blob, DOMString, or FormData, or null
     */
    navigator.sendBeacon(url, data);
  };

  setCSRFToken = (token) => {
    this.CSRFToken = token;
  }

  getInstance() {
    // for compatibility
    try {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('The method "getInstance()" is deprecated, access the method by BaseProvider directly');
      }
    } catch (e) {

    }

    return this.provider;
  }

  request(...args) {
    return this.provider.request(...args);
  }

  get(...args) {
    return this.provider.get(...args);
  }

  post(...args) {
    return this.provider.post(...args);
  }

  put(...args) {
    return this.provider.put(...args);
  }

  patch(...args) {
    return this.provider.patch(...args);
  }

  delete(...args) {
    return this.provider.delete(...args);
  }

  options(...args) {
    return this.provider.options(...args);
  }

  head(...args) {
    return this.provider.head(...args);
  }
}

export default new BaseProvider();