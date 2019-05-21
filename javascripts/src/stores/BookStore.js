import qs from 'qs';
import { observable, action, computed } from 'mobx';
import BaseProvider from '../utils/Provider';

class BookStore {
  @observable initialize = false;
  @observable loading = false;
  @observable books = [];
  @observable recommandBooks = [];
  @observable detailId = 0;
  @observable detailModalVisible = false;

  @computed get isReady() {
    return this.initialize && !this.loading
  }

  @computed get bookDetail() {
    if (this.detailId === 0) {
      return null;
    }

    const index = this.books.findIndex(b => b.id === this.detailId)
    if (index === -1) {
      return null;
    }

    return this.books[index]
  }

  @action getRecommand(query) {
    return BaseProvider.get(`/api/book/?is_recommand=true`).then((res) => {
      this.recommandBooks = res.data.results;
    })
  }

  @action getList(query) {
    return BaseProvider.get(`/api/book/?${qs.stringify(query, { arrayFormat: 'repeat' })}`).then((res) => {
      this.books = res.data.results;
      this.initialize = true;
    })
  }

  @action openDetailModal = (bookId) => {
    this.detailId = bookId;
    this.detailModalVisible = true;
  }

  @action closeDetailModal = () => {
    this.detailModalVisible = false;
  }
}


export default new BookStore();
