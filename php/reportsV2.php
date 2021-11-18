<?php

interface InterfaceEntity
{
    public function getId();
    public function setId($id);
}

interface CollectionInterface
{
    public function __clone();
    public function __sleep();
    public function __toString();
    public function __wakeup();
    public function add($element);
    public function clear();
    public function contains($element);
    public function containsKey($key);
    public function count();
    public function current();
    public function exists(Closure $p);
    public function filter(Closure $p);
    public function first();
    public function forAll(Closure $p);
    public function get($key);
    public function getIterator();
    public function getKeys();
    public function getValues();
    public function indexOf($element);
    public function isEmpty();
    public function key();
    public function last();
    public function map(Closure $func);
    public function next();
    public function offsetExists($offset);
    public function offsetGet($offset);
    public function offsetSet($offset, $value);
    public function offsetUnset($offset);
    public function partition(Closure $p);
    public function pluck($key);
    public function remove($key);
    public function removeElement($element);
    public function set($key, $value);
    public function slice($offset, $length = null);
    public function toArray();
}

class ArrayCollection implements CollectionInterface
{
    private $elements = array();

    public function __construct(array $elements = [])
    {
        $this->elements = $elements;
    }

    public function add($element)
    {
        $this->elements[] = $element;
        return $this;
    }

    public function clear()
    {
        $this->elements = array();
    }

    public function contains($element)
    {
        return in_array($element, $this->elements);
    }

    public function isEmpty()
    {
        return empty($this->elements);
    }

    public function remove($key)
    {
        if (isset($this->elements[$key])) {
            $removed = $this->elements[$key];
            unset($this->elements[$key]);

            return $removed;
        }

        return null;
    }

    public function removeElement($element)
    {
        $key = array_search($element, $this->elements, true);

        if ($key !== false) {
            unset($this->elements[$key]);

            return true;
        }

        return false;
    }

    public function containsKey($key)
    {
        return array_key_exists($key, $this->elements);
    }

    public function get($key)
    {
        return $this->elements[$key];
    }

    public function getKeys()
    {
        return array_keys($this->elements);
    }

    public function getValues()
    {
        return array_values($this->elements);
    }

    public function set($key, $value)
    {
        $this->elements[$key] = $value;
    }

    public function toArray()
    {
        return $this->elements;
    }

    public function first()
    {
        return reset($this->elements);
    }

    public function last()
    {
        return end($this->elements);
    }

    public function key()
    {
        return key($this->elements);
    }

    public function current()
    {
        return current($this->elements);
    }

    public function next()
    {
        return next($this->elements);
    }

    public function exists(Closure $p)
    {
        foreach ($this->elements as $key => $element) {
            if (call_user_func($p, $key, $element)) {
                return true;
            }
        }

        return false;
    }

    public function filter(Closure $p)
    {
        $elements = array();

        foreach ($this->elements as $key => $element) {
            if (call_user_func($p, $key, $element)) {
                $elements[$key] = $element;
            }
        }

        return new static($elements);
    }

    public function forAll(Closure $p)
    {
        foreach ($this->elements as $key => $element) {
            if (!call_user_func($p, $key, $element)) {
                return false;
            }
        }

        return true;
    }

    public function map(Closure $func)
    {
        $elements = array();

        foreach ($this->elements as $key => $element) {
            $elements[$key] = call_user_func($func, $key, $element);
        }

        return new static($elements);
    }

    public function partition(Closure $p)
    {
        $matches = $noMatches = array();

        foreach ($this->elements as $key => $element) {
            if (call_user_func($p, $key, $element)) {
                $matches[$key] = $element;
            } else {
                $noMatches[$key] = $element;
            }
        }

        return array(new static($matches), new static($noMatches));
    }

    public function indexOf($element)
    {
        return array_search($element, $this->elements, true);
    }

    public function slice($offset, $length = null)
    {
        return array_slice($this->elements, $offset, $length, true);
    }

    public function getIterator()
    {
        return new \ArrayIterator($this->elements);
    }

    public function count()
    {
        return count($this->elements);
    }

    public function offsetExists($offset)
    {
        return $this->containsKey($offset);
    }

    public function offsetGet($offset)
    {
        return $this->get($offset);
    }

    public function offsetSet($offset, $value)
    {
        if (!isset($offset)) {
            return $this->add($value);
        }

        return $this->set($offset, $value);
    }

    public function offsetUnset($offset)
    {
        return $this->remove($offset);
    }

    public function pluck($key)
    {
        print_r($key);
        print_r($this->elements);
        return new static(array_map(function ($element) use ($key) {
            print_r($element);
            return is_object($element) ? $element->$key : $element[$key];
        }, $this->elements));
    }

    public function __toString()
    {
        return __CLASS__ . '@' . spl_object_hash($this);
    }

    public function __clone()
    {
        $this->elements = array_map(function ($element) {
            return clone $element;
        }, $this->elements);
    }

    public function __sleep()
    {
        return array('elements');
    }

    public function __wakeup()
    {
        foreach ($this->elements as $key => $element) {
            if ($element instanceof InterfaceEntity) {
                $this->elements[$key] = clone $element;
            }
        }
    }
}

interface ColumnInterface extends InterfaceEntity
{
    public function setType(string $type);
    public function getType();
    public function setName(string $name);
    public function getName();
    public function setOrder(string $order);
    public function getOrder();
}


interface HeaderInterface
{
    public function setColumns(CollectionInterface $columns);
    public function getColumns();
}

class Header implements HeaderInterface
{
    private $columns;

    public function __construct(CollectionInterface $columns)
    {
        $this->columns = $columns;
    }

    public function setColumns(CollectionInterface $columns)
    {
        $this->columns = $columns;
    }

    public function getColumns()
    {
        return $this->columns;
    }
}

class Column implements ColumnInterface
{
    private $name;
    private $order;
    const ORDERS = ['asc', 'desc'];

    public function __construct(string $id, string $name, string $order)
    {
        $this->validateOrder($order);
        $this->id = $id;
        $this->name = $name;
        $this->order = $order;
    }

    private function validateOrder(string $order)
    {
        if (!in_array($order, self::ORDERS)) {
            throw new \InvalidArgumentException('Invalid order');
        }
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setType(string $type)
    {
        $this->type = $type;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setName(string $name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setOrder(string $order)
    {
        $this->validateOrder($order);
        $this->order = $order;
    }

    public function getOrder()
    {
        return $this->order;
    }
}


interface RepositoryInterface
{
    public function getRows();
}

interface ReportInterface
{
    public function setTitle($title);
    public function getTitle();
    public function setHeader(HeaderInterface $header);
    public function getHeader();
    public function setData(CollectionInterface $data);
    public function getData();
}

abstract class AbstractReport implements ReportInterface
{
    private $header;
    private $data;
    private $title = 'Report';

    public function __construct(HeaderInterface $header, CollectionInterface $data)
    {
        $this->header = $header;
        $this->data = $data;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function setHeader(HeaderInterface $header)
    {
        $this->header = $header;
    }

    public function getHeader()
    {
        return $this->header;
    }

    public function setData(CollectionInterface $data)
    {
        $this->data = $data;
    }

    public function getData()
    {
        return $this->data;
    }
}

class NetoRepository implements RepositoryInterface
{
    public function getRows()
    {
        $data = [
            [
                'id' => 1,
                'name' => 'John Doe'
            ],
            [
                'id' => 2,
                'name' => 'Jane Doe',
                'test' => 'Y'
            ],
            [
                'id' => 3,
                'name' => 'John Smith'
            ],
            [
                'id' => 4,
                'name' => 'Jane Smith'
            ],
        ];

        return array_map(function ($row) {
            return (object) $row;
        }, $data);
    }
}

interface PresenterInterface
{
    public function render();
}

interface ReportPresenterInterface extends PresenterInterface
{
    public function setReport(ReportInterface $report);
    public function getReport();
}

abstract class AbstractReportPresenter implements ReportPresenterInterface
{
    private $report;

    public function __construct(ReportInterface $report)
    {
        $this->report = $report;
    }

    public function setReport(ReportInterface $report)
    {
        $this->report = $report;
    }

    public function getReport()
    {
        return $this->report;
    }
}



class CsvPresenter extends AbstractReportPresenter
{
    public function render()
    {
        $report = $this->getReport();
        $header = $report->getHeader();
        $csv = fopen(__DIR__.'/'.$report->getTitle().'.csv', 'w');
        // $csv = fopen('php://output', 'w');

        fputcsv($csv, array_map(function ($column) {
            return $column->getName();
        }, $header->getColumns()->toArray()));

        foreach ($report->getData()->getIterator() as $row) {
            fputcsv($csv, array_map(function ($column) use ($row) {
                $attribute = $column->getId();
                return $row->{$attribute};
            }, $header->getColumns()->toArray()));
        }

        fclose($csv);
    }
}

class PdfPresenter extends AbstractReportPresenter
{
    public function render()
    {
    }
}

class JsonPresenter extends AbstractReportPresenter
{
    public function render()
    {
        $report = $this->getReport();
        $header = $report->getHeader();

        $data = [];

        foreach ($report->getData()->getIterator() as $row) {
            $rows = [];

            foreach ($header->getColumns()->getIterator() as $column) {
                $attribute = $column->getId();
                $rows[] = $row->{$attribute};
            }

            $data[] = $rows;
        }

        $json = json_encode([
            'header' => $header->getColumns()->toArray(),
            'rows' => $data
        ]);


        file_put_contents(__DIR__.'/'.$report->getTitle().'.json', $json);
    }
}

class ArrayPresenter extends AbstractReportPresenter
{
    public function render()
    {
        $report = $this->getReport();
        $header = $report->getHeader();

        $data = [];

        foreach ($report->getData()->getIterator() as $row) {
            $rows = [];

            foreach ($header->getColumns()->getIterator() as $column) {
                $attribute = $column->getId();
                $rows[] = $row->{$attribute};
            }

            $data[] = $rows;
        }

        $json = [
            'header' => $header->getColumns()->toArray(),
            'rows' => $data
        ];

        return  $json;
    }
}

class CommandLinePresenter extends AbstractReportPresenter
{
    public function render()
    {
        $pad = 10;
        $report = $this->getReport();
        $header = $report->getHeader();
        $data = $report->getData();

        echo $report->getTitle() . PHP_EOL;
        echo 'Header' . PHP_EOL;

        foreach ($header->getColumns()->getIterator() as $column) {
            echo '| ' . str_pad($column->getName() . ' (' . $column->getOrder() . ')', $pad). ' |';
        }

        echo PHP_EOL . '------------------------------------' . PHP_EOL;

        foreach ($data->getIterator() as $row) {
            foreach ($header->getColumns()->getIterator() as $column) {
                $attribute = $column->getId();
                echo '| ' . str_pad($row->{$attribute}, $pad). ' |';
            }

            echo PHP_EOL;
        }

        echo '------------------------------------' . PHP_EOL;
    }
}

class NetoReport extends AbstractReport
{
    public function __construct(HeaderInterface $header, CollectionInterface $data)
    {
        parent::__construct($header, $data);
    }
}

class ReportFactory
{
    public static function createNeto(array $data)
    {
        $columns = (new ArrayCollection())
            ->add(new Column('id', 'ID', 'asc'))
            ->add(new Column('name', 'Name', 'asc'))
            ->add(new Column('test', 'X', 'asc'));

        return new NetoReport(
            new Header($columns),
            new ArrayCollection($data)
        );
    }
}

$repository = new NetoRepository();
$report = ReportFactory::createNeto($repository->getRows());

$presenterCsv = new CsvPresenter($report);
$presenterCsv->render();

$presenterJson = new JsonPresenter($report);
$presenterJson->render();

$presenterArray = new ArrayPresenter($report);
$presenterArray->render();

$presenterCommand = new CommandLinePresenter($report);
$presenterCommand->render();
