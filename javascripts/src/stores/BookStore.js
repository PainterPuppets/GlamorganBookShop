import { observable, action, computed } from 'mobx';
import BaseProvider from '../../utils/Provider';


class BookStore {

  @observable CSRFToken = csrf.getCSRFToken();

  @observable id = 0;
  @observable loading = false;
  @observable isAuthenticated = false;
  @observable isTa = false;
  @observable isStaff = false;
  @observable isSuperuser = false;
  @observable isTeacher = false;
  @observable isEditor = false;
  @observable fullName = '';

  @observable gk = {};

  @computed get json() {
    return JSON.stringify(this);
  }

  @computed get user() {
    return {
      ...this,
    };
  }

  @action setCSRFToken(token) {
    this.CSRFToken = token;
  }

  @action refreshCSRFToken() {
    this.CSRFToken = csrf.getCSRFToken();
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

  @action updateGK() {
    return BaseProvider.get('/api/gatekeeper/permission/').then(action(({ data }) => {
      this.gk = {
        ...this.gk,
        ..._.mapKeys(data, (value, key) => _.camelCase(key)),
      };
    }));
  }
  
  @action reset() {
    this.id = 0;
    this.CSRFToken = csrf.getCSRFToken();
    this.isAuthenticated = false;
    this.isTa = false;
    this.isStaff = false;
    this.isSuperuser = false;
    this.isTeacher = false;
    this.isEditor = false;
    this.gk = {};
    this.fullName = '';
  }

  @action login(email, password, remember = false) {
    return BaseProvider.post('/api/accounts/login/', {
      email,
      password,
      remember,
    }).then(({ data }) => {
      this.update(data);
      this.refreshCSRFToken();

      return Promise.all([this.updateGK(), this.getUser()]).then(() => {
        return data;
      });
    });
  }
  
  @action logout() {
    return BaseProvider.post('/accounts/logout/').then(() => {
      this.reset();
    });
  }

  @action getUser() {
    if (this.loading) {
      return;
    }
    this.setLoading(true);

    return BaseProvider.get('/api/user/').then(({ data }) => {
      this.update(data);
      this.setLoading(false);

      return data;
    }).catch((err) => {
      this.setLoading(false);

      return Promise.reject(err);
    });
  }
}

const store = new BookStore();

export default store;
