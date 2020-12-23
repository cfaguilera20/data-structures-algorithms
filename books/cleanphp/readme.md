# Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [The Problem With Code](#the-problem-with-code)
  - [Writing Good Code is Hard](#writing-good-code-is-hard)
  - [What is Architecture?](#what-is-architecture)
    - [Layers](#layers)
    - [Poor Architcture](#poor-architcture)
    - [Poor MVC](#poor-mvc)
    - [Poor Usage of Database Abstraction](#poor-usage-of-database-abstraction)
    - [Good architecture](#good-architecture)
    - [Cost of Poor Arquitecture](#cost-of-poor-arquitecture)
  - [Coupling, The Enemy](#coupling-the-enemy)
- [Decoupling Toolbox](#decoupling-toolbox)
  - [Design Patterns](#design-patterns)
    - [Factory](#factory)
    - [Types of Factories](#types-of-factories)
      - [Factory Method](#factory-method)
      - [Abstract Factory](#abstract-factory)
    - [Repository](#repository)
    - [Adapter](#adapter)
    - [Strategy](#strategy)
  - [SOLID Design Principles](#solid-design-principles)
    - [Single Responsibility Principle](#single-responsibility-principle)
    - [Open-Closed](#open-closed)
    - [Liskov Substitution](#liskov-substitution)
    - [Interface Segregation](#interface-segregation)
    - [Dependency Inversion](#dependency-inversion)
  - [Dependency Injection](#dependency-injection)
    - [Inversion of Control](#inversion-of-control)
    - [Using Dependency Injection](#using-dependency-injection)
      - [Setter Injection](#setter-injection)
      - [Constructor Injection](#constructor-injection)


# Introduction

Framework to developing applications:

1. Testable
2. Refactorable
3. Easy to work with
4. Easy to maintain

# The Problem With Code

## Writing Good Code is Hard
-   Writing Good Code is Hard
-   Writing Bad Code is Easy
-   We Can`t Test Anything
-   Change Breaks Everything
-   We Live or Die by the Framework
-   We Want to Use all the Libraries

## What is Architecture?

Software architecture is the structure. This can apply to the application as a whole, or might only apply to individual pieces of the application.

Architecture could be simple as use MVC architecture on the front-end and API web service on the back-end.

### Layers

In a good architecture these concerns are each broken out into layers.

-   Database interaction
-   Bussines rules
-   API interaction
-   The view or UI

### Poor Architcture

Spaghetti code in PHP - Unstestable:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dirty PHP</title>
    </head>
    <body>
        <?php $employees = mysql_query('SELECT * FROM employees ORDER BY name'); ?>
        <h2>Employees</h2>
        <ul>
            <?php while ($employee = mysql_fetch_assoc($employees)): ?>
            <li><?php echo $employee['name']; ?></li>
            <?php endwhile;?>
        </ul>
    </body>
</html>
```

Refactoring problems:

-   The table or the column can change
-   Switch to another DB library like PDO
-   Change the source of data like a RESTfull API
-   Implement a templating language
-   Standarization

### Poor MVC

```php
# controllers/EmployeeController.php

class EmployeeController {

    public function indexAction() {
        $db = Db::getInstance();
        $employees = $db->fetchAll('SELECT * FROM employees ORDER BY name');

        return [
            'employees' => $employees
        ];
    }

}
```

```html
<!--views/employee/index.php-->

<h2>Employees</h2>
<ul>
    <?php foreach($employees as $employee): ?>
    <li><?php echo $employee['name']; ?></li>
    <?php endwhile; ?>
</ul>
```

Refactoring problems:

-   Hard-coding queries
-   Strong coupling to the Db Class
-   Hard to test

### Poor Usage of Database Abstraction

```php
# controllers/EmployeeController.php

class EmployeeController {

    public function indexAction() {
        $employeeRepository = new EmployeeRepository();
        $employees = $employeeRepository->getAll();

        return [
            'employees' => $employees
        ];
    }

}
```

```html
<!--views/employee/index.php-->

<h2>Employees</h2>
<ul>
    <?php foreach($this->employees as $employee): ?>
    <li><?php echo $employee['name']; ?></li>
    <?php endwhile; ?>
</ul>
```

Refactoring problems:

-   Srong coupling to repository
-   Dependency issues (repository)

### Good architecture

```php
class EmployeeController extends AbstractActionController {
    protected $employeeRepository;

    public function __construct(EmployeeRepositoryInterface $respository) {
        $this->employeeRepository = $repository;
    }

    public function indexAction() {
        return [
            'employees' => $this->EmployeeRepository->getAll();
        ];
    }
}
```

Benefits

-   Not tightly couple to any repository
-   Easily test
-   Not impediment to upgrade to newser version of PHP or libraries.
-   Queries abstraction

### Cost of Poor Arquitecture

-   Untestable
-   Hard to refactor
-   Impossible to upgrade

## Coupling, The Enemy

Spaghetti coupling

```html
<?php $employees = mysql_query('SELECT * FROM employees ORDER BY name'); ?>
<h2>Employees</h2>
<ul>
    <?php while ($employee = mysql_fetch_assoc($employees)): ?>
    <li><?php echo $employee['name']; ?></li>
    <?php endwhile;?>
</ul>
```

OOP coupling

```php
class EmployeeController {
    public function indexAction() {
        $repo = new EmployeeRepository();
        $employees = $repo->getAll();
        return $employees;
    }
}
```

How to reduce it

-   Less dependencies
-   Dependency injection
-   Use Interfaces, not concrete Classes
-   Use Adapters

# Decoupling Toolbox

## Design Patterns

-   Factory
-   Repository
-   Adapater
-   Strategy

### Factory

Tradicional way

```php
// Some code
$employee = new Employee();
// Some code
```

Factory

```php
class EmployeeFactory {
    protected $managerRepo;

    public function __construct(ManagerRepository $repo) {
        $this->managerRepo = $repo;
    }

    public function createEmployee($name) {
        $employee = new Employee();
        $employee->setName($name);
        $employee->setStatus('active');
        $employee->setManager(
            $this->managerRepo->getRandom()
        );
        return $employee;
    }
}
```

Benefits

-   Reusable code
-   Testable code
-   Easy to change

Static Factory

```php
class EmployeeFactory {
    public static function createEmployee($name) {
        $employee = new Employee();
        $employee->setName($name);
        $employee->setStatus('active');
        return $employee;
    }
}

$employee = EmployeeFactory::createEmployee('Carlos Aguilera');
```

### Types of Factories

-   Factory Method
-   Abstract Factory


#### Factory Method

```php 
class Document {
    public function createPage() {
        return new Page();
    }
}
```
***Note: Returns a new page***

```php 
abstract class AbstractDocument {
    public function render() {
        $this->addPAge(1, $this->createPage());
    }

    public function addPage(1, AbstractPAge) {

    }

    abstract public function createPage();
}
```
***Note: It allows create multiple different types of documents.***

Example: 
```php
class ResumeDocument extends AbstractDocument {
    public function createPage() {
        return new ResumePage();
    }
}

class PortfolioDocument extends AbstractDocument {
    public function createPage() {
        return new PortfolioPage();
    }
}

interface PageInterface {}
class ResumePage implements PageInterface {}
class PortfolioPage implements PortfolioPage {}
```

#### Abstract Factory

- Client code
- Object Interface
- Concrete Objects
- Abstract Factory
- Concrete Factories

```php 
class Building {
    public function createCars() {}
    public function createTrucks() {}
}
```

First create the Object Interfaces:

```php
interface CarInterface {}
interface TruckInterface {}
```

Then create the Concrete Obejcts:

```php 
class ChevyCamaro implements CarInterface {}
class ChevySilverado implements TruckInterface {}

class FordMustang implements CarInterface {}
class ChevyF150 implements TruckInterface {}
```

Then create the Abstract Factory:

```php
interface AssemblyLineInterface {
    public function createCar();
    public function createTruck();
}
```

Then creat our Concrete Factories:

```php
class ChevyAssemblyLine implements AssemblyLineInterface {
    public function createCar() {
        return new ChevyCamaro();
    }
    public function createTruck() {
        return new ChevySilverado();
    }
}

class FordAssemblyLine implements AssemblyLineInterface {
    public function createCar() {
        return new FordMustang();
    }
    public function createTruck() {
        return new ChevyF150();
    }
}
```

Finally Building class can be supplied a specific AssemblyLineInterface:

```php 
class Building {
    protected $assemblyLine;
    protected $inventory = [];

    public function __construct(AssemblyLineInterface $assemblyLine) {
        $this->assemblyLine = $assemblyLine;
    }

    public function createCars($num = 1) {
        for($i = 0; $i < $num; $i++) {
            $this->inventory[] = $this->assemblyLine->createCar();
        }
    }

    public function createTrucks($num = 1) {
        for($i = 0; $i < $num; $i++) {
            $this->inventory[] = $this->assemblyLine->createTruck();
        }
    }
}
```

Call the code:

```php
$building = new Building(new FordAssemblyLine());
$building->createCars(10);

$building = new Building(new ChevyAssemblyLine());
$building->createTrucks(10);
```

### Repository

Common retrieval methods variants:

```php 
class MyRepository {
    public function getById($id) {}
    public function findById($id) {}
    public function find($id) {}
    public function retrive($id) {}
}
```

Retrieval in different ways:

```php 
class MyRepository {
    public function getById($id) {}
    public function getAll($id) {}
    public function getBy(array $conditions) {}
}
```

Persistence methods:

```php 
class MyRepository {
    public function persist($object) {}
    public function save($object) {}
}
```

Should ony refer to ony obejct:

```php 
public function saveAction() {
    $customer = $this->customerRepository->getById(2004);
    $customer->setName('Carlos Aguilera');
    $this->customerRepository->save($customer);
}
```

### Adapter
```php 
class GoogleMapsApi {
    public fun ction getWalkingDirections($from, $to){}
}
```

Interfacer that defines the structure that gets distances:

```php
interface DistanceInterface {
    public function getDistance($from, $to);
}

```

Concrete class - Adapter:

```php 
class WalkingDistance implements DistanceInterface {
    public function getDistance($form, $to) {
        $api = new GoogleMapsApi();
        $directions = $api->getWalkingDirections($from, $to);
        return $directions->getTotalDistance();
    }
}
```

### Strategy

```php 
public function invoiceCustomer(array $customers) {
    foreach($customers as $customer) {
        $invoice = $this->invoiceFactory->create(
            $customer,
            $this->orderRepository->getByCustomer($customer)
        );

        switch($customer->getDeliveryMethod()) {
            case 'email': 
                $strategy = new EmailDeliveryStrategy();
                break;
            case 'print': 
            default:
                $strategy = new PrintDeliveryStrategy();
                break;
        } 

        $strategy->send($invoice);
    }
}
```

Interface:

```php
interface InvoiceDeliveryInterface {
    public function send(Invoice $invoice);
}
```

Delivery options:

```php
class EmailDeliveryStrategy implements InvoiceDeliveryInterface {
    public function send(Invoice $invoice) {
        // Use an email library
    }
}

class PrintDeliveryStrategy implements InvoiceDeliveryInterface {
    public function send(Invoice $invoice) {
        // Send it to printer
    }
}
```

Delivery factory:

```php
class InvoiceDeliveryStrategyFactory {
    public function create(Customer $customer) {
        switch ($customer->getDeliveryMethod()) {
            case 'email': 
                return new EmailDeliveryStrategy();
                break;
            case 'print': 
            default:
                return new PrintDeliveryStrategy();
                break;
        }
    }
}
```

Use the factory:

```php 
public function invoiceCustomer(array $customers) {
    foreach($customers as $customer) {
        $invoice = $this->invoiceFactory->create(
            $customer,
            $this->orderRepository->getByCustomer($customer)
        );
        $strategy = $this->deliveryMethodFactory->create($customer);
        $strategy->send($invoice);
    }
}
```

## SOLID Design Principles

### Single Responsibility Principle

This class violates the principle because manage the state, and the retrieval from and persistance. 

```php
class User {
    public function getName() {}
    public function getEmail() {}

    public function find($id) {}
    public function save() {}
}
```

Refactoring:

```php
class User {
    public function getName() {}
    public function getEmail() {}
}
class UserRepository {
    public function find($id) {}
    public function save() {}
}
```

Breaking classes

```php 
class  InvoicingServices {
    public function generateAndSendInvoices() {}
    public function generateInvoice($customer) {}
    public function createInvoiceFile($invoice) {}
    public function sendInvoice($invoice) {}
}
```

Refactoring: 

```php 
class  OrderRepository {
    public function getOrdersByMonth($month) {}
}

class  InvoicingService {
    public function generateAndSendInvoices() {}
}

class  InvoiceFactory {
    public function createInvoice(Order $order) {}
}

class  InvoiceGenerator {
    public function createInvoiceFormat(Invoice $invoice, $format) {}
}

class  InvoiceDeliveryService {
    public function sendInvoice(Invoice $invoice, $method) {}
}
```

### Open-Closed

Classes should be open to extension, but closed to modification.

```php
class EdiStrategy implements DeliveryInterface {
    public function send(Invoice $invoice) {
        // Use EDI library...
    }
}
```

### Liskov Substitution

Objects of the same interface should be interchangable without affecting the behavior of the client program.

Interface:

```php
interface HelloInterface() {
    public function getHello();
}
```

Concrete classes:

```php 
class EnglishHello implements HelloInterface {
    public function getHello() {
        return "Hello";
    }
}

class SpanishHello implements HelloInterface {
    public function getHello() {
        return "Hola";
    }
}
```

The concrete classes should be interchangables in the client:

```php
class Greeter {
    public function sayHello(HelloInterface $hello) {
        echo $hello->getHello();
    }
}

$greeter = new Greeter();
$greeter->sayHello(new EnglishHello());
$greeter->sayHello(new SpanishHello());
```

### Interface Segregation

The client code should not be forced to depend on methods it does not use.

```php 
interface LoggerInterface {
    public function write($message);
    public function read($messageCount);
}

class FileLogger implements LoggerInterface {
    protected $file;

    public function __construct($file) {
        $this->file = new \SplFileObejct($file);
    }

    public function write($message) {
        $this->file->fwrite($message);
    }

    public function read($messageCount) {
        $lines = 0;
        $contents = [];

        while(!$this->fileeof() && $lines < $messageCount) {
            $contents[] = $this->file->fgets();
            $lines++;
        }

        return $contents;
    }
}
```

Now implements a email logger:

```php
class EmailLogger implements LoggerInterface {
    protected $address;

    public function __construct($address) {
        $this->address = $address;
    }

    public function write($message) {
        mail($this->address, 'Alert!', $message);
    }

    public function read($messageCount) {
        # What should we read?
    }
}
```

Refactoring interfaces: 

```php
interface LogWriterInterface {
    public function write($message);
}

interface LogReaderInterface {
    public function read($messageCount);
}

interface LogManagerInterface extends LogWriterInterface, LogReaderInterface {}
```

Concrete classes: 

```php 
class FileLogger implements LogManagerInterface {
    // Some code...
}

class EmailLogger implements LogWriterInterface {
    // Some code...
}
```

### Dependency Inversion

>*A. high level modules should not depend upon low level modules. Both should depen upon abstractions. 
<br>and<br>
B. Abstractions should not depend upon details. Details should depend upon abstractions.*

```php
class GameManager {
    protected $input;
    protected $video;

    public function __construct() {
        $this->input = new KeyboardInput();
        $this->video = new VidepOutpu();
    }

    public function run() {
        // accept user input from $this->input 
        // draw the game state on $this->video 
    }
}
```

Refactoring:

```php
class GameManager {
    protected $input;
    protected $video;

    public function __construct(InputInterface $input, OutInterface $output) {
        $this->input = $input;
        $this->video = $output;
    }

    public function run() {
        // accept user input from $this->input 
        // draw the game state on $this->video 
    }
}

class KeyboardInput implements InputInterface {
    public function getInputEvent() {}    
}

class JoystickInput implements InputInterface {
    public function getInputEvent() {}    
}

class ScreenOutput implements OutInterface {
    public function render() {}    
}

class TerminalOutput implements OutInterface {
    public function render() {}    
}
```

## Dependency Injection

```php 
class CustomerController {
    public function viewAction() {
        $repository = new CustomerRepository();
        $customer = $respository->getById(1001);
        return $customer;
    }
}
```

### Inversion of Control

Service locator

```php 
public function viewAction() {
    $repository => $this->serviceLocator->get('CustomerRepository');
    $customer = $repository->getById(1001);
    return $customer;
}
```

Register services in the service locator - Depends of the framework:

```php
$serviceLocator->setFactory('CustomerRepository', function($sl){
    return \Paht\To\CustomerRepository($sl->get('Connection'));
});
```

### Using Dependency Injection

#### Setter Injection

```php 
$controller = new CustomerController();
$controller->setCustomerRepository(new CustomerRepository());
$customer = $controller->viewAction(1001);
```

Controller implementation:

```php
class CustomerController {
    protected $repository;

    public function setCustomerRepository(CustomerRepository $repo) {
        $this->repository = $repo;
    }

    public function viewAction($id) {
        $customer = $this->repository->getById($id);
        return $customer;
    }
}
```
*Note: The dependencies are not required.*

#### Constructor Injection

```php
$controller = new CustomerController(new CustomerRepository());
$customer = $controller->viewAction(1001);
```

Controller implementation:

```php 
class CustomerController {
    protected $respository;

    public function __constructor(CustomerRepository $repo) {
        $this->respository = $repo;
    }

    public function viewAction($id) {
        $customer = $this->repository->getById($id);
        return $customer;
    }
}
```
*Note: The controller now requires an instance of the repository.*
