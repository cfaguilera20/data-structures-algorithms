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

# OCP - The Open-Closed Principle

A software artifact should be open for extension but closed for modification.

# LSP - The Liskov Substitution Principle

What is wanted heres is something like the following substitution property: If for each object o1 of type S ther is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2 then S is a subtype of T.

```js
class Billing {
    bill(license) {
        const amount = license.calFee();
    }
}

class ILicense {
    calcFee() {
        throw Error('Not implemented');
    }
}
class PersonaLicense extends ILicense {
    calcFee() {
        return 100;
    }
}

class BussinesLicense extends ILicense {
    calcFee() {
        return 200;
    }
}
```

**_License, and its derivates, conform LSP._**

## LSP Violation

Aggregator for many taxy dispatch services.

-   Uver
    -   driver
        -   /pickupAdress
        -   /pickupTime
        -   /destination
-   Lift
    -   driver
        -   /pickupAdress
        -   /pickupTime
        -   /destination

```js
class Driver {
    find(id) {
        // Some code
    }
    getDispatchUri() {
        return this.uri;
    }
}

const driver = Driver.find(1);
const uri = driver.getDispatchUri();
const pickupAddressUrl = `${uri}/pickupAdress/24 Street`;
const pickupTimeUrl = `${uri}/pickupTime/153`;
const destinationUrl = `${uri}/destination/ORD`;
```

Now suppose that theres another company that created another spec for destination:

-   Bibi
    -   driver
        -   /pickupAdress
        -   /pickupTime
        -   /dest

We need to add a special case:

```js
const driver = Driver.find(1);
const uri = driver.getDispatchUri();
const pickupAddressUrl = `${driver.uri}/pickupAdress/24 Street`;
const pickupTimeUrl = `${driver.uri}/pickupTime/153`;
const destinationUrl = getDestinationUrl(driver);

function getDestinationUrl(driver) {
    let destination = 'destination';
    if (driver.getDispatchUri().includes('bibi')) {
        destination = 'dest';
    }

    return `${driver.uri}/${destination}/ORD`;
}
```
