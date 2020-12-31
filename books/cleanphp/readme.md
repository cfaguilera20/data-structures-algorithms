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
    - [Cost of Poor Architecture](#cost-of-poor-architecture)
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
    - [Using Factories to Create Dependencies](#using-factories-to-create-dependencies)
    - [Handly Many Dependencies](#handly-many-dependencies)
    - [Are we still coupling?](#are-we-still-coupling)
  - [Defining a Contract With Interfaces](#defining-a-contract-with-interfaces)
    - [Interfaces in PHP](#interfaces-in-php)
    - [Interfaces as Type Hints](#interfaces-as-type-hints)
  - [Abstracting with Adapters](#abstracting-with-adapters)
  - [Setting up the Adapter](#setting-up-the-adapter)
- [The Clean Architecture](#the-clean-architecture)
  - [MVC, and it's Limtations](#mvc-and-its-limtations)
    - [MVC Diagram](#mvc-diagram)
    - [MVC Components](#mvc-components)
      - [Model](#model)
      - [View](#view)
      - [Controller](#controller)
    - [MVC Isn't Good Enough](#mvc-isnt-good-enough)
    - [Obese Models](#obese-models)
    - [More Layers for All of the Things!](#more-layers-for-all-of-the-things)
  - [Clean Architecture](#clean-architecture)
  - [The Onion Architecture](#the-onion-architecture)
- [Framework Independence](#framework-independence)
  - [The Problem with Framework](#the-problem-with-framework)
  - [Framework Independence](#framework-independence-1)
    - [Abstract the Usage of the Framework](#abstract-the-usage-of-the-framework)
    - [Routes and Controllers](#routes-and-controllers)
      - [Using Adapters to Wrap Your Controller.](#using-adapters-to-wrap-your-controller)
      - [Keep Controllers Small](#keep-controllers-small)
      - [Views](#views)
      - [Forms](#forms)
      - [Framework Services](#framework-services)
- [References](#references)


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

    public function __construct(EmployeeRepositoryInterface $repository) {
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

### Cost of Poor Architecture

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
        $customer = $repository->getById(1001);
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
    protected $repository;

    public function __constructor(CustomerRepository $repo) {
        $this->repository = $repo;
    }

    public function viewAction($id) {
        $customer = $this->repository->getById($id);
        return $customer;
    }
}
```
*Note: The controller now requires an instance of the repository.*

Some times isn`t necessary to use dependency injection:

```php 
public function viewAction() {
    $customer = $this->repository->getById(1001);
    return new viewModel([
        'customer' => $customer
    ]);
}
```
*ViewModel is injected directly in the controller. It has no configuration, it has no dependencies itself, and in the case of testing, we probably just want to verify that an instance of ViewModel was returned.*


### Using Factories to Create Dependencies

Depends of the context we can return a different type of response.

```php 
class CustomerController {
    protected $repository;
    protected $responseFactory;

    public function __construct(CustomerRepository $repo, ResponseFactory $factory) {
        $this->repository = $repo;
        $this->responseFactory = $factory;
    }

    public function viewAction($id) {
        $customer = $this->repository->getById($id);
        $response = $this->responseFactory->create($this->params('context'));
        $response->setData('customer', $customer);
        return $response;
    }
}
```

### Handly Many Dependencies

Don't get out of control.

```php 
public function __construct() {
    CustomerRepository $customerRepository,
    ProductRepository $productRepository,
    UserRepository $userRepository,
    TaxService $taxService,
    InvoiceFactory $invoiceFactory,
    ResponseFactory $responseFactory,
}
```
*Note: This usually indicates that we have a class that vilates the Single Responsability Principle.*

### Are we still coupling?

We moved from this:

```php
class CustomerController { 
    public function viewAction($id) {
        $repository = new CustomerRepository();
        $customer = $repository->getById($id);
        return $customer;
    }
}
```

To this: 

```php
class CustomerController { 
    protected $repository;

    public function __construct(CustomerRepository $repo) {
        $this->repository = $repo;
    }
    
    public function viewAction($id) {
        $customer = $this->repository->getById($id);
        return $customer;
    }
}
```

We still need something that is or extends from CustomerRepository

## Defining a Contract With Interfaces

### Interfaces in PHP 

Definition without implementation:

```php
interface Automobile {
    public function drive();
    public function idle();
    public function park();
}
```

Implement: 

```php
class Car implements Automobile {
    public function drive() {
        echo 'Driving!';
    }

    public function idle() {
        echo 'Idling!';
    }

    public function park() {
        echo 'Parking!';
    }
}
```

### Interfaces as Type Hints

```php
interface CustomerRepositoryInterface {
    public function getById($id);
}
```

The argument passed to the `__contruct()` method must be an instance of the interface:

```php 
class CustomerController {
    protected $repository;

    public function __construct(CustomerRepositoryInterface $repo) {
        $this->repository = $repo;
    }

    public function viewAction($id) {
        $customer = $this->repository->getById(1001);
        return $customer;
    }
}
```

Concrete class

```php 
class CustomerRepository implements CustomerRepositoryInterface {
    public function getById($id) {
        // Some Code
    }
}
```

## Abstracting with Adapters

```php
class AddressController extends Abstract Controller {
    protected $geocoder;

    public function __construct(BillsGeocoder $geocoder) {
        $this->geocoder = $geocoder;
    }

    public function validateAddressAction() {
        $address = $this->vars()->fromPost('address');
        $isValid = $this->geocoder->geocode($address) !== false;
    }
}
```

What if BillsGeocoder goes away?

## Setting up the Adapter

```php 
interface GeocoderInterface {
    public function geocoder($address);
}
```

Controller depends only upon interfaces:

```php
class AddressController extends Abstract Controller {
    protected $geocoder;

    public function __construct(GeocoderInterface $geocoder) {
        $this->geocoder = $geocoder;
    }

    public function validateAddressAction() {
        $address = $this->vars()->fromPost('address');
        $isValid = $this->geocoder->geocode($address) !== false;
    }
}
```

Adapter

```php 
class BillsGeocoderAdapter implements GeocoderInterface {
    protected $geocoder;

    public function __contruct(BillsGeocoder $geocoder)  {
        $this->geocoder = $geocoder;
    }

    public function geocode($address) {
        return $this->geocoder->geocode($address);
    }
}
```

# The Clean Architecture

## MVC, and it's Limtations

### MVC Diagram

![MVC Diagram][mvc_diagram]

[mvc_diagram]: ./assets/MVC.png "MVC Diagram"

### MVC Components

#### Model

Represents the data.

```php 
class User extends AbstractModel {
    public $id;
    public $alias;
    public $fullName;
    public $email;
}

$user = new User();
$user->alias 'cfaguilera';
$user->fullName 'Carlos Aguilera';
$user->email 'carlos@cfaguilera.me';
```

#### View

What is presented to the user.

```php 
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>&nbsp;</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($users as $user): ?>
        <tr>
            <td><?php echo $user->id; ?></td>
            <td><?php echo $user->fullName; ?></td>
            <td><?php echo $user->email; ?></td>
            <td>
                <a href="/users/edit/<?php echo $user->id; ?>"
                    Edit
                </a>
            </td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>
```

#### Controller

Responsible for interpreting and responding.

```php 
class UserController extends AbstractModel {
    // Responsible for listing.
    public function indexAction() {}
    
    // Responsible for viewing.
    public function viewAction() {
        $id = $this->params('id');
        $user = $this->repository->getById($id);

        $view  = new View();
        $view->setFile('users/view.phtml');
        $view->setData([
            'user' => $user
        ]);
        return $view;
    }
    // Responsible for updating.
    public function updateAction() {}
}
```

### MVC Isn't Good Enough

- View is a role well defined.
- Controllers become overwhelmed with business logic or
- Models absorbs it all.

*Note: Fat model, skinny controller.*


### Obese Models

A clean model looks like: 

 ```php 
class User { 
    public $id;
    public $alias;
    public $fullName;
    public $email;
} 
 ```
 *Note: Classes like the above are Entities.*

### More Layers for All of the Things!

- Entity
- Persistence
- View 
- Controller

## Clean Architecture

Uncle Bob describes these architectures as being:

- Independent of Frameworks. The architecture does not depend on the existence of some library of feature laden software. This allows you to use such frameworks as tools, rather than having to cram your system into their limited constraints.
- Testable. The business rules can be tested without the UI, Database, Web Server, or any other external element.
- Independent of UI. The UI can change easily, without changing the rest of the system. A Web UI could be replaced with a console UI, for example, without changing the business rules.
- Independent of Database. You can swap out Oracle or SQL Server, for Mongo,
BigTable, CouchDB, or something else. Your business rules are not bound to the database.
- Independent of any external agency. In fact your business rules simply don’t know anything at all about the outside world.

## The Onion Architecture


<!-- ![Onion][architecture_onion] -->

- Layer 1
  - Domain Model: Pure models or entities that are representative of the bussines objects in your application.
- Layer 2
  - Domain Service: Things like factories, repositories, and other services that use the core domain model.
- Layer 3
  - Application Services: Composed of application implementation. Controllers, router, data parsers, authentication or translator. Everything necessary to bootstrap and provide the UI.
- Layer 4
  - User Interface: 
  - Infrastructure: Where the data comes from: Databases, Services (API), or something else.
  - External Libraries
  - Tests

# Framework Independence

The collections of services, repositories, factories, and entireties are the application. 

## The Problem with Framework

Having an application tightly couple to a particular framework makes it very hard to leave the framework.

## Framework Independence

The ability to switch a t will, easily between one framework or another, or to using no a framework at all. In a software application, the ability to leave a framework with minimal effort is a very powerful position to be in. 

### Abstract the Usage of the Framework

We use several tactics to abstract the usage of a framework:

- **Use Interfaces Liberally** We previously discussed how we can use interfaces to define base functionality we require, type-hint to those interfaces, and then pass in concrete implementations of those interfaces using dependency injection (or some other method of inversion of control).
- **Use the Adapter Pattern** We also discussed the usage of the Adapter design pattern to wrap the functionality of one class and make it conform to the specification of another, such as an interface.
- **Follow the principles of clean code and SOLID** Writing clean code, and following the principles of SOLID, allow us to have nicely organized and grouped code, and when implemented correctly, code that doesn’t depend strongly on the framework to function.

### Routes and Controllers

The hardest part.

```php 
class CustomerController extends BaseController {}
```

It extends immediately from the framework.

#### Using Adapters to Wrap Your Controller.

Write controllers completely outside from your application. Similar to services:

```php 
namespace MyApp\Controller;

class Customers {
    public function index() {
        return [
            'customers' => $this->customerRepository->getAll()
        ];
    }
}
```

Use an adapter in the framework:

```php 

use MyApp\Controller\Customers;

class CustomerController extends AbstractActionController {
    protected $controller;

    public function __construct(Customers $controller) {
        $this->controller = $controller;
    }

    public function indexAction() {
        return $this->controller->index();
    }
}
```

#### Keep Controllers Small

Controllers should be like response factories. The should create a response based on the input (the HTTP request).

#### Views

Composed by HTML, JS, and CSS. It's recommendable to use a library like Plates. This allow to keep the view layer intact when switching frameworks.

#### Forms

Aura.Input

#### Framework Services

Consider Laravel's Mail facade:

```php 
Mail::send('email.hello', $data, function($message) {
    $message->to('hello@cfaguilera.me', 'You')->subject('Hello, You!');
});
```

Create an adapter interface

```php 
interface MailerInteraface {
    public function send($template, array $data, callable $callback);
}
```

Implements the interface

```php
class LaravelMailerAdapter implements MailerInterface {
    protected $mailer;

    public function __construct(Mailer $mailer) {
        $this->mailer = $mailer;
    }

    public function send($template, array $data, callable $callback) {
        $this->mailer->send($template, $data, $callback);
    }
}
```

Inject the adapter to the controller

```php 
class MailController extends BaseController {
    protected $mailer;
    
    public function __construct(MailerInterface $mailer) {
        $this->mailer = $mailer;
    }

    public function sendMail() {
        $this->mailer->send('email.hello', $data, function($message) {
            $message->to('hello@cfaguilera.me', 'You')->subject('Hello, You!');
        });
    }
}
```

Another case

```php
$data = Symfony\Component\Yaml\Yaml::parse($file);
```

Solution

```php
interface  YamlParserInterface {
    public function parse($fileName);
}
```

Implements the interface

```php
class SymfonyYamlAdapter implements YamlParserInterface {
    public function parse($fileName) {
        return Yaml::parse($fileName);
    }
}
```

Inject the adapter

```php 
class YamlImporter {
    protected $parser;

    public function __construct(YamlParserInterface $parser) {
        $this->parser = $parser;
    }

    public function parseUserFile($fileName) {
        $users = $this->parser->parse($fileName);

        foreach($users as $user) {
            // Some code
        }
    }
}


# References
[The Onion Architecture](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/)

<!--Assets-->
[mvc_diagram]: ./assets/MVC.png "MVC Diagram"
[architecture_onion]: ./assets/Onion.png "Onion"
