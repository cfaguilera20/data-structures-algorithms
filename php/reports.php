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

interface HeaderInterface
{
    public function setColumns(CollectionInterface $columns);
    public function getColumns();
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

interface RowInterface extends CollectionInterface
{
    public function setCells(CollectionInterface $cells);
    public function getCells();
}

interface CellInterface extends InterfaceEntity
{
    public function setType(string $type);
    public function getType();
    public function setValue(string $value);
    public function getValue();
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


class Row extends ArrayCollection implements RowInterface
{
    private $cells;

    public function setCells(CollectionInterface $cells)
    {
        $this->cells = $cells;
    }

    public function getCells()
    {
        return $this->cells;
    }
}


class Cell implements CellInterface
{
    private $value;
    private $type;

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setValue($value)
    {
        $this->value = $value;
    }

    public function getValue()
    {
        return $this->value;
    }

    public function setType(string $type)
    {
        $this->type = $type;
    }

    public function getType()
    {
        return $this->type;
    }
}

interface TableInterface
{
    public function setHeader(HeaderInterface $header);
    public function getHeader();
    public function setRows(CollectionInterface $rows);
    public function getRows();
    public function addRow(RowInterface $row);
    public function removeRow($key);
    public function getRow($key);
}

interface RepositoryInterface
{
    public function getRows();
}

interface DataTableInterface extends TableInterface
{
    public function __construct(RepositoryInterface $repository, HeaderInterface $header);
    public function setRepository(RepositoryInterface $repository);
    public function getRepository();
    public function setFilters(array $filters);
    public function getFilters();
    public function load();
}

abstract class AbstractDataTable implements DataTableInterface
{
    private $repository;
    private $filters;
    private $header;
    private $rows;

    public function __construct(RepositoryInterface $repository, HeaderInterface $header)
    {
        $this->repository = $repository;
        $this->header = $header;
    }

    public function setRepository(RepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function getRepository()
    {
        return $this->repository;
    }

    public function setHeader(HeaderInterface $header)
    {
        $this->header = $header;
    }

    public function getHeader()
    {
        return $this->header;
    }

    public function setRows(CollectionInterface $rows)
    {
        $this->rows = $rows;
    }

    public function getRows()
    {
        return $this->rows;
    }

    public function addRow(RowInterface $row)
    {
        $this->rows->add($row);
    }

    public function removeRow($key)
    {
        $this->rows->remove($key);
    }

    public function getRow($key)
    {
        return $this->rows->get($key);
    }

    public function setFilters(array $filters)
    {
        $this->validateFilters($filters);
        $this->filters = $filters;
    }

    public function getFilters()
    {
        return $this->filters;
    }
}

class NetoDataTable extends AbstractDataTable
{
    public function __construct(RepositoryInterface $repository, HeaderInterface $header)
    {
        parent::__construct($repository, $header);
    }

    public function load()
    {
        $data = $this->getRepository()->getRows();
        $rows = new ArrayCollection();

        foreach ($data as $item) {
            $cells = new ArrayCollection();
            foreach ($this->getHeader()->getColumns()->getIterator() as $column) {
                $cell = new Cell();
                $attribute = $column->getId();
                $cell->setValue($item->{$attribute});
                $cells->add($cell);
            }

            $row = new Row();
            $row->setCells($cells);
            $rows->add($row);
        }

        $this->setRows($rows);

        return $this;
    }
}

interface ReportExporterInterface
{
    public function export(ReportInterface $dataTable);
}

interface ReportInterface
{
    public function setTitle(string $title);
    public function getTitle();
    public function setDataTable(DataTableInterface $dataTable);
    public function getDataTable();
    public function setExporter(ReportExporterInterface $exporter);
    public function getExporter();
    public function export();
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
                'name' => 'Jane Doe'
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

class NetoReport implements ReportInterface
{
    private $dataTable;
    private $title = 'Neto Report';

    public function __construct(DataTableInterface $dataTable, ReportExporterInterface $exporter)
    {
        $this->dataTable = $dataTable;
        $this->exporter = $exporter;
    }

    public function setTitle(string $title)
    {
        $this->title = $title;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function setDataTable(DataTableInterface $dataTable)
    {
        $this->dataTable = $dataTable;
    }

    public function getDataTable()
    {
        return $this->dataTable;
    }

    public function setExporter(ReportExporterInterface $exporter)
    {
        $this->exporter = $exporter;
    }

    public function getExporter()
    {
        return $this->exporter;
    }

    public function export()
    {
        $this->dataTable->load();
        return $this->getExporter()->export($this);
    }
}

class CsvExporter implements ReportExporterInterface
{
    public function export(ReportInterface $report)
    {
        $dataTable = $report->getDataTable();
        $header = $dataTable->getHeader();
        $rows = $dataTable->getRows();
        $filename = __DIR__.'/'.$report->getTitle().'.csv';
        $csv = fopen($filename, 'w');
        // $csv = fopen('php://output', 'w');

        fputcsv($csv, array_map(function ($column) {
            return $column->getName();
        }, $header->getColumns()->toArray()));

        foreach ($rows->getIterator() as $row) {
            fputcsv($csv, array_map(function ($cell) {
                return $cell->getValue();
            }, $row->getCells()->toArray()));
        }

        fclose($csv);
    }
}

class PdfExporter implements ReportExporterInterface
{
    public function export(ReportInterface $report)
    {
        $dataTable = $report->getDataTable();
        $header = $dataTable->getHeader();
        $rows = $dataTable->getRows();
        $filename = __DIR__.'/'.$report->getTitle().'.pdf';
        $pdf = new FPDF();
        $pdf->AddPage();
        $pdf->SetFont('Arial', 'B', 16);
        $pdf->Cell(40, 10, $report->getTitle());
        $pdf->Ln();
        $pdf->SetFont('Arial', 'B', 12);
        $pdf->Cell(40, 10, 'Header');
        $pdf->Ln();
        $pdf->SetFont('Arial', '', 12);
        foreach ($header->getColumns()->getIterator() as $column) {
            $pdf->Cell(40, 10, $column->getName());
        }

        $pdf->Ln();
        $pdf->SetFont('Arial', 'B', 12);
        $pdf->Cell(40, 10, 'Rows');
        $pdf->Ln();
        $pdf->SetFont('Arial', '', 12);
        foreach ($rows->getIterator() as $row) {
            foreach ($row->getCells()->getIterator() as $cell) {
                $pdf->Cell(40, 10, $cell->getValue());
            }

            $pdf->Ln();
        }

        $pdf->Output($filename, 'F');
    }
}

class JsonExporter implements ReportExporterInterface
{
    public function export(ReportInterface $report)
    {
        $dataTable = $report->getDataTable();
        $header = $dataTable->getHeader();
        $rows = $dataTable->getRows();
        $filename = __DIR__.'/'.$report->getTitle().'.json';

        $data = [];

        foreach ($rows->getIterator() as $row) {
            $cells = [];

            foreach ($row->getCells()->getIterator() as $cell) {
                $cells[] = $cell->getValue();
            }

            $data[] = $cells;
        }

        $json = json_encode([
            'header' => $header->getColumns()->toArray(),
            'rows' => $data
        ]);

        file_put_contents($filename, $json);
    }
}

class ArrayExporter implements ReportExporterInterface
{
    public function export(ReportInterface $report)
    {
        $dataTable = $report->getDataTable();
        $header = $dataTable->getHeader();
        $rows = $dataTable->getRows();
        $filename = __DIR__.'/'.$report->getTitle().'.json';

        $data = [];

        foreach ($rows->getIterator() as $row) {
            $cells = [];

            foreach ($row->getCells()->getIterator() as $cell) {
                $cells[] = $cell->getValue();
            }

            $data[] = $cells;
        }

        $json = [
            'header' => $header->getColumns()->toArray(),
            'rows' => $data
        ];

        return  $json;
    }
}

class CommandLineExporter implements ReportExporterInterface
{
    public function export(ReportInterface $report)
    {
        $pad = 10;
        echo $report->getTitle() . PHP_EOL;
        $datatable = $report->getDataTable();
        $header = $datatable->getHeader();
        $rows = $datatable->getRows();

        echo 'Header' . PHP_EOL;

        foreach ($header->getColumns()->getIterator() as $column) {
            echo '| ' . str_pad($column->getName() . ' (' . $column->getOrder() . ')', $pad). ' |';
        }

        echo PHP_EOL . '------------------------------------' . PHP_EOL;

        foreach ($rows->getIterator() as $row) {
            foreach ($row->getCells()->getIterator() as $cell) {
                echo '| ' . str_pad($cell->getValue(), $pad). ' |';
            }

            echo PHP_EOL;
        }

        echo '------------------------------------' . PHP_EOL;
    }
}

$columns = (new ArrayCollection())
    ->add(new Column('id', 'ID', 'asc'))
    ->add(new Column('name', 'Name', 'asc'))
    ->add(new Column('doble', 'X', 'asc'));
$dataTable = new NetoDataTable(
    new NetoRepository(),
    new Header($columns)
);
$report = new NetoReport($dataTable, new CommandLineExporter());

$exporter = new CsvExporter();
$report->setExporter($exporter);
$report->export();

// $exporter = new PdfExporter();
// $report->setExporter($exporter);
// $report->export();

$exporter = new JsonExporter();
$report->setExporter($exporter);
$report->export();

$exporter = new ArrayExporter();
$report->setExporter($exporter);
print_r($report->export());

$exporter = new CommandLineExporter();
$report->setExporter($exporter);
$report->export();


$array = [
    (object) ['id' => 1, 'name' => 'name 1'],
    (object) ['id' => 1, 'name' => 'name 1'],
    ['id' => 1, 'name' => 'name 1'],
    ['id' => 1, 'name' => 'name 1'],
    ['id' => 1, 'name' => 'name 1'],
];

$collection = new ArrayCollection($array);
print_r($collection->pluck('name')->toArray());
