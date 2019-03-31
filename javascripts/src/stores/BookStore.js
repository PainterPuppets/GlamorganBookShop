import qs from 'qs';
import { observable, action, computed } from 'mobx';
import BaseProvider from '../utils/Provider';

class BookStore {
  @observable books = [];

  @action getList(query) {
    return BaseProvider.get(`/api/book/?${qs.stringify(query, { arrayFormat: 'repeat' })}`).then((res) => {
      this.books = res.data.results;
    })
  }

}


export default new BookStore();
