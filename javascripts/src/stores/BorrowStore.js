import { observable, action, computed } from 'mobx';
import BaseProvider from '../utils/Provider';
import { BORROW_STATUS } from '../constants';
import moment from 'moment';

class BorrowStore {
  @observable initialize = false;
  @observable loading = false;
  @observable borrowRecord = [];
  @observable borrowModalVisible = false;


  @computed get borrowingRecord() {
    return this.borrowRecord.filter(b => b.status === BORROW_STATUS.BORROWING);
  }

  @computed get dueRecord() {
    return this.borrowRecord.filter(b => b.status === BORROW_STATUS.BORROWING && moment(b.expire_at).isBefore(moment().add(7, 'days')) && moment(b.expire_at).isAfter(moment()) );
  }

  @computed get expireRecord() {
    return this.borrowRecord.filter(b => b.status === BORROW_STATUS.BORROWING && moment(b.expire_at).isBefore(moment()));
  }

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

  @action giveBackBook = (borrowId) => {
    return BaseProvider.post(`/api/borrow/${borrowId}/giveback/`).then((res) => {
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
