<?php

use Demo\Invoicer\Domain\Entity\Invoice;
use Demo\Invoicer\Domain\Entity\Order;
use Demo\Invoicer\Domain\Service\InvoicingService;

describe('InvoicingService', function () {
    describe('->generateInvoices()', function () {
        beforeEach(function () {
            $repo = 'Demo\Invoicer\Domain\Repository\OrderRepositoryInterface';
            $this->repository = $this->getProphet()->prophesize($repo);
            $this->factory = $this->getProphet()->prophesize('Demo\Invoicer\Domain\Factory\InvoiceFactory');
        });

        it('should query the repository for uninvoiced Orders', function () {
            $this->repository->getUninvoicedOrders()->shouldBeCalled();
            $service = new InvoicingService(
                $this->repository->reveal(),
                $this->factory->reveal()
            );
            $service->generateInvoices();
        });

        it('should return an Invoice for each uninvoiced Order', function () {
            $orders = [(new Order())->setTotal(400)];
            $invoices = [(new Invoice())->setTotal(400)];

            $this->repository->getUninvoicedOrders()->willReturn($orders);
            $this->factory->createFromOrder($orders[0])->willReturn($invoices[0]);

            $service = new InvoicingService(
                $this->repository->reveal(),
                $this->factory->reveal()
            );
            $results = $service->generateInvoices();

            assert(is_array($results));
            assert(count($results) === count($orders));
        });

        afterEach(function () {
            $this->getProphet()->checkPrediections();
        });
    });
});
