<?php

use Demo\Invoicer\Domain\Entity\Invoice;
use Demo\Invoicer\Domain\Entity\Order;
use Demo\Invoicer\Domain\Factory\InvoiceFactory;

describe('InvoiceFactory', function () {
    describe('->createFromOrder', function () {
        it('should return an order object', function () {
            $order = new Order();
            $factory = new InvoiceFactory();
            $invoice = $factory->createFromOrder($order);

            assert($invoice instanceof \Demo\Invoicer\Domain\Entity\Invoice);
        });

        it('should set the total of the invoice', function () {
            $order = new Order();
            $order->setTotal(500);

            $factory = new InvoiceFactory();
            $invoice = $factory->createFromOrder($order);

            assert($invoice->getTotal() === 500, 'Expected 500.');
        });

        it('should associate the Order to the Invoice', function () {
            $order = new Order();

            $factory = new InvoiceFactory();
            $invoice = $factory->createFromOrder($order);

            assert($invoice->getOrder() === $order);
        });

        it('should set the date of the Invoice', function () {
            $order = new Order();

            $factory = new InvoiceFactory();
            $invoice = $factory->createFromOrder($order);

            $now = new \DateTime();
            assert($invoice->getInvoiceDate()->format('Y-m-d H:m') === $now->format('Y-m-d H:m'));
        });
    });
});
