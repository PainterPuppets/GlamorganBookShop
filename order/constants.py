# coding: utf-8
class OrderStatus(object):
    WAITING_FOR_PAYMENT = 1
    WAITING_FOR_VERIFICATION = 2
    PAYMENT_RECEIVED = 3
    PAYMENT_REFUNDED = 4


ORDER_STATUS_CHOICES = (
    (OrderStatus.WAITING_FOR_PAYMENT, '等待付款'),
    (OrderStatus.WAITING_FOR_VERIFICATION, '等待管理员确认'),
    (OrderStatus.PAYMENT_RECEIVED, '已确认收款'),
    (OrderStatus.PAYMENT_REFUNDED, '已退款'),
)
