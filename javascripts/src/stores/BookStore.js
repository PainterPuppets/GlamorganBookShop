import qs from 'qs';
import { observable, action, computed } from 'mobx';
import BaseProvider from '../utils/Provider';

class BookStore {
  @observable initialize = false;
  @observable loading = false;
  @observable books = [];

  @computed get isReady() {
    return this.initialize && !this.loading
  }

  @action getList(query) {
    return BaseProvider.get(`/api/book/?${qs.stringify(query, { arrayFormat: 'repeat' })}`).then((res) => {
      this.books = res.data.results;
    })
  }

}


export default new BookStore();
