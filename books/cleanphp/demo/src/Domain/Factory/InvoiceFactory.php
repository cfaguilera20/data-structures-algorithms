<?php

namespace Demo\Invoicer\Domain\Factory;

use Demo\Invoicer\Domain\Entity\Invoice;
use Demo\Invoicer\Domain\Entity\Order;

class InvoiceFactory
{
    public function createFromOrder(Order $order)
    {
        $invoice = new Invoice();
        $invoice->setOrder($order);
        $invoice->setInvoiceDate(new \DateTime());
        $invoice->setTotal($order->getTotal());
        return $invoice;
    }
}
