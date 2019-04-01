# coding: utf-8
class BorrowStatus(object):
    BORROWING = 1
    GIVEBACKED = 2


BORROW_STATUS_CHOICES = (
    (BorrowStatus.BORROWING, u'正在借阅'),
    (BorrowStatus.GIVEBACKED, u'已经归还'),
)
