# SRP - Single Resposability Principle

- A module should have one, and oly one, reason to change.
- A module should be responsible to one, and oly one, user or steakholder.
- A module should be responsible to one, and only one, actor.


*Note: Group: one or more people who require that change*


## Symptom 1: Accidental Duplication

```js
class Employee {
    calculatePay() {
        // some code
    }

    reportHours() {
        // some code
    }

    save() {
        // some code
    }
}
```
