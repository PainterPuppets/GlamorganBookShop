import { observable, action, computed } from 'mobx';
import _ from 'lodash';
import BaseProvider from '../utils/Provider';

class AuthStore {
  constructor() {
    const initialStore = window.__INITIAL_AUTH_STORE__ || {};
    if (Object.keys(initialStore).length === 0) {
      this.getUser();

      return;
    }
    this.update(initialStore.detail || {});
  }

  @observable id = 0;
  @observable loading = false;
  @observable isAuthenticated = false;
  @observable isStaff = false;
  @observable isSuperuser = false;
  @observable username = '';


  @computed get json() {
    return JSON.stringify(this);
  }

  @computed get user() {
    return {
      ...this,
    };
  }

  @action setLoading(loading) {
    this.loading = loading;
  }

  @action update(partialState) {
    for (const key in partialState) {
      if (partialState.hasOwnProperty(key) && this.hasOwnProperty(_.camelCase(key))) {
        this[_.camelCase(key)] = partialState[key];
      }
    }
  }
  
  @action reset() {
    this.id = 0;
    this.isAuthenticated = false;
    this.isStaff = false;
    this.isSuperuser = false;
    this.fullName = '';
    BaseProvider.refreshCSRFToken();
  }

  @action login(username, password, remember = false) {
    return BaseProvider.post('/api/users/login/', {
      username,
      password,
    }).then((res) => {
      this.update(res.data);
      BaseProvider.refreshCSRFToken();
    });
  }
  
  @action logout() {
    return BaseProvider.post('/api/users/logout/').then(() => {
      this.reset();
    });
  }

  @action getUser() {
    if (this.loading) {
      return Promise.resolve();
    }
    this.setLoading(true);

    return BaseProvider.get('/api/users/').then(({ data }) => {
      console.log(data)
      this.update(data);
      this.setLoading(false);

      return data;
    }).catch((err) => {
      this.setLoading(false);

      return Promise.reject(err);
    });
  }
}

const store = new AuthStore();

export default store;
