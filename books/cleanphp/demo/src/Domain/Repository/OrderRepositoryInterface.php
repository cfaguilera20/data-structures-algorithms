<?php

namespace Demo\Invoicer\Domain\Repository;

interface OrderRepositoryInterface extends RepositoryInterface
{
    public function getUninvoicedOrders();
}
