<?php

class Demo
{
    protected $id;
    protected $code;
    protected $name;
}


class SearchCriteria
{
    protected $limit;
    protected $currentPage;
    protected $conditions;
    protected $orders;
}

interface SearchCriteriaProcessorInterface
{
    public function process(SearchCriteria $criteria);
    public function gerOrder();
    public function gerCurrentPage();
    public function gerLimit();
    public function gerConditions();
}

class MysqlSearchCriteriaProcessor implements SearchCriteriaProcessorInterface
{
    public function process(SearchCriteria $criteria)
    {
        // Some code
    }
    public function gerOrder()
    {
        // Some code
    }

    public function gerCurrentPage()
    {
        // Some code
    }

    public function gerLimit()
    {
        // Some code
    }

    public function gerConditions()
    {
        // Some code
    }
}

class ApiSearchCriteriaProcessor implements SearchCriteriaProcessorInterface
{
    public function process(SearchCriteria $criteria)
    {
        // Some code
    }
    public function gerOrder()
    {
        // Some code
    }
    public function gerCurrentPage()
    {
        // Some code
    }
    public function gerLimit()
    {
        // Some code
    }
    public function gerConditions()
    {
        // Some code
    }
}

interface RepositoryInterface
{
    public function destroy(SearchCriteria $searchCriteria);
}

class PatitoRepository implements RepositoryInterface
{
    public function __construct(SearchCriteriaProcessorInterface $processor)
    {
        $this->processor = $processor;
    }

    public function destroy(SearchCriteria $searchCriteria)
    {
        $xls = new PHPExcel();
    }
}

class ActiveRecordRepository implements RepositoryInterface
{
    public function destroy(SearchCriteria $searchCriteria)
    {
        $conditions = $searchCriteria->getConditions();
        $this->model->first($conditions);
        $record->is_active = false;
        $record->save();
    }
}

class ApiRepository implements RepositoryInterface
{
    public function destroy(SearchCriteria $searchCriteria)
    {
        $conditions = $searchCriteria->getConditions();
        $url = "http://api.com/demo/{$code}";
        $this->client->request('DELETE', $url);
    }
}


class Controller
{
    public function __construct(\RepositoryInterface $repository)
    {
        $this->repository = $repository;
    }


    public function destroy(SearchCriteria $searchCriteria)
    {
        $searchCriteria =  new SearchCriteria();
        $searchCriteria
            ->setCondition('code', '=', $code)
            ->setOrder('id', 'desc')
            ->setLimit(1);
        $this->repository->destroy($searchCriteria);
    }
}

$controller1 = new Controller(new ApiRepository(
    new ApiSearchCriteriaProcessor()
));
$controller2 = new Controller(new ActiveRecordRepository(
    new MysqlSearchCriteriaProcessor()
));

$controller1->destroy(1);
$controller2->destroy(2);


class basic
{
    public function destroy()
    {
        $sql = "DELETE FROM demo WHERE code = :code";
        PDO::prepare($sql)->execute([
            ':code' => $code
        ]);
    }
}
