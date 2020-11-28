# SRP - Single Resposability Principle

-   A module should have one, and oly one, reason to change.
-   A module should be responsible to one, and oly one, user or steakholder.
-   A module should be responsible to one, and only one, actor.

_Note: Group: one or more people who require that change_

## Symptom 1: Accidental Duplication

```js
class Employee {
    calculatePay() {
        // CFO
        this.regularHours();
    }

    reportHours() {
        // COO
        this.regularHours();
    }

    regularHours() {
        // Shrared code
    }

    save() {
        // CTO
    }
}
```

This class violates the SRP becasue those three methods are rsponsible to three very differente actors. The SRP says to separate the code that different actors depend on.

## Symptom 2: Merges

Two differetn developers, possibly from two different teams, check out the `Employee` class and begin to make changes. Unfortunately their changes collide. The result is a merge.

## Solutions

Move functions into different classes.

Separate the data from the functions. The three classes share acces to EmployeeData, which is a simple data structure wiht no methods.

```js
class Employee {}

class PayCalculator extends Employee {
    calculatePay() {}
}

class HourReporter extends Employee {
    reportHours() {
        // Some code
    }
}

class EmployeeSaver extends Employee {
    saveEmployee() {
        // Some code
    }
}
```

The downside is that not there are three clases. A common solution is to use the `Facade` pattern.

```js
class Employe {
    data = [];

    calculatePay() {
        // Some code
    }
    reportHours() {
        // Some code
    }
    save() {
        // Some code
    }
}

class HourReporter extends Employee {
    reportHours() {
        // Some code
    }
}

class EmployeeSaver extends Employee {
    saveEmployee() {
        // Some code
    }
}
```
