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