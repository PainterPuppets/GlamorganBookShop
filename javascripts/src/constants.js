export const BORROW_STATUS = {
  BORROWING: 1, // 借阅中
  GIVEBACKED: 2, // 已归还
}

export const borrowStatus = {
  [BORROW_STATUS.BORROWING]: { text: '借阅中' },
  [BORROW_STATUS.GIVEBACKED]: { text: '已归还' },
}
