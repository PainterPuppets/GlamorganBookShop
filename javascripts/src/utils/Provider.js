import qs from 'qs';
import axios from 'axios';
import { computed } from 'mobx';
import AuthStore from '../stores/AuthStore';

const BaseProvider = {

  @computed get provider() {
    return axios.create({
      withCredentials: true,
      headers: {
        "X-CSRFToken": AuthStore.CSRFToken,
      },
    });
  },

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
  },

  request(...args) {
    return this.provider.request(...args);
  },

  get(...args) {
    return this.provider.get(...args);
  },

  post(...args) {
    return this.provider.post(...args);
  },

  put(...args) {
    return this.provider.put(...args);
  },

  patch(...args) {
    return this.provider.patch(...args);
  },

  delete(...args) {
    return this.provider.delete(...args);
  },

  options(...args) {
    return this.provider.options(...args);
  },

  head(...args) {
    return this.provider.head(...args);
  },

};

export default BaseProvider;

export const ArticleProvider = {

  get(url) {
    return BaseProvider.get(url);
  },

  getList(query) {
    let url = '/api/article/';
    if (query) {
      url = `${url}?${qs.stringify(query, { arrayFormat: 'repeat' })}`;
    }

    return BaseProvider.get(url);
  },

  like(id, cancel = false) {
    return BaseProvider.post(`/api/article/${id}/like/`, { cancel });
  },

};
