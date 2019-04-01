import { observable, action, computed } from 'mobx';
import BaseProvider from '../utils/Provider';

class BorrowStore {
  @observable initialize = false;
  @observable loading = false;
  @observable borrowRecord = [];

  @observable borrowModalVisible = false;


  @computed get isReady() {
    return this.initialize && !this.loading
  }

  @action updateData = (borrow) => {
    const index = this.borrowRecord.findIndex(b => b.id === borrow.id);
    if (index !== -1) {
      this.borrowRecord[index] = borrow;
      return;
    }
    this.borrowRecord = this.borrowRecord.concat(borrow);
  }

  @action getRecord = () => {
    return BaseProvider.get(`/api/borrow/`).then((res) => {
      this.borrowRecord = res.data;
      this.initialize = true;
    })
  }

  @action borrow = (bookId) => {
  return BaseProvider.post(`/api/borrow/`, {
    book_id: bookId
  }).then((res) => {
    this.updateData(res.data)
  })
}

@action giveUpBook = (bookId) => {
  return BaseProvider.post(`/api/borrow/giveup`, {
    book_id: bookId
  }).then((res) => {
    this.updateData(res.data)
  })
}

@action openBorrowModal = () => {
  this.borrowModalVisible = true;
}

@action closeBorrowModal = () => {
  this.borrowModalVisible = false;
}

}

export default new BorrowStore();
