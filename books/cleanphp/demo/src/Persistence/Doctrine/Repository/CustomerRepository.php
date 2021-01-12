<?php

namespace Demo\Invoicer\Persistence\Doctrine\Repository;

use Demo\Invoicer\Domain\Repository\CustomerRepositoryInterface;

class CustomerRepository extends AbstractDoctrineRepository implements CustomerRepositoryInterface
{
    /**
     * @var string
     */
    protected $entityClass = 'Demo\Invoicer\Domain\Entity\Customer';
}
