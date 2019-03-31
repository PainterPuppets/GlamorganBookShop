# coding: utf-8
class BorrowStatus(object):
    BORROWING = 1
    RETURNED = 2


BORROW_STATUS_CHOICES = (
    (BorrowStatus.BORROWING, '正在借阅'),
    (BorrowStatus.RETURNED, '已经归还'),
)
