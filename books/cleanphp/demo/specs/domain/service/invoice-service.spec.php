<?php

use Demo\Invoicer\Domain\Entity\Invoice;
use Demo\Invoicer\Domain\Entity\Order;

describe('InvoicingService', function () {
    describe('->generateInvoices()', function () {
        it('should query the repository for uninvoiced Orders');
        it('should return an Invoice for each uninvoiced Order');
    });
});
