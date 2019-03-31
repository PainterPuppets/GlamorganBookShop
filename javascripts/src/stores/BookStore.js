import qs from 'qs';
import { observable, action, computed } from 'mobx';
import BaseProvider from '../utils/Provider';

class BookStore {
  @action getList(query) {
    return BaseProvider.get(`/api/book/?${qs.stringify(query, { arrayFormat: 'repeat' })}`);
  }

}


export default new BookStore();
