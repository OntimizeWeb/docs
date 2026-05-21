---
title: "Complex filtering expressions"
permalink: /guide/filterexpression/
author_profile: false
excerpt: "Build complex filtering expressions."
sidebar:
  nav: "docs"
nav_exclude: true
layout: default
---

{% include base_path %}
{% include toc %}

This section describes the functionality of the utility class `FilterExpressionUtils`, that provides a set of methods and utilities for building complex filtering expressions used in **OntimizeWeb**.

## Filtering expression
A filtering expression is an object that defines an operation between two operands. The interface `Expression` contains the basic structure of a filtering expression. The second operand may be omitted in some expressions, for example, filtering with a NULL value.

The filtering expression structure is the following;
```json
{
  /** The left operand. */
  lop: string | Expression

  /** The operator. */
  op: string

  /** The right operand. */
  rop?: string | Expression
}
```

## Operators
**OntimizeWeb** defines a set of operators used as the `op` parametter of `Expression` for building [filtering expressions](#filtering-expression). This operators cover most important operations defined by every database management system and they are the following:

| Operators                                                  |
|------------|-----------------------------------------------|
| AND        | `TRUE` if both logical expressions are `TRUE` |
| EQUAL      | equal to a value                              |
| LESS       | less than a value                             |
| LESS EQUAL | less than or equal to a value                 |
| LIKE       | `TRUE` if the operand matches a pattern       |
| MORE       | more than a value                             |
| MORE EQUAL | more than or equal to a value                 |
| NOT EQUAL  | not equal to a value                          |
| NOT LIKE   | `TRUE` if the operand not matches a pattern   |
| NULL       | is `NULL`                                     |
| NOT NULL   | is not `NULL`                                 |
| OR         | `TRUE` if either logical expression is `TRUE` |
| IN         | `TRUE` if the operand is contained in the provided values |

<!-- * **Logical operators**:
> * AND: `TRUE` if both logical expressions are `TRUE`.
> * LIKE: `TRUE` if the operand matches a pattern.
> * NOT_LIKE: `TRUE` if the operand not matches a pattern.
> * OR: `TRUE` if either logical expression is `TRUE`.

* **Comparision operators**:
> * EQUAL: equal to a value.
> * LESS: less than a value.
> * LESS EQUAL: less than or equal to a value.
> * MORE: more than a value.
> * MORE_EQUAL: more than or equal to a value.
> * NOT EQUAL: not equal to a value.

* **Predicates**:
> * NULL: is `NULL`.
> * NOT NULL: is not `NULL`. -->

All this operator are defined statically in `FilterExpressionUtils` class with the operator prefix `OP_` (`OP_AND`, `OP_EQUAL`, etc.).

## Filter building methods
**OntimizeWeb** defines a set of methods for building filtering expressions automatically. This methods are the following:

{% include o-method.md file="filterexpressionmethods" collection="methods" %}

## Utility methods
**OntimizeWeb** also defines a set of utility methos to help you building complex filtering expressions. This methods are the following:

{% include o-method.md file="filterexpressionmethods" collection="utilityMethods" %}

## Examples

The following example shows how to buid a *Basic expression* for querying a table using the `FilterExpressionUtils` class. The expressions passed to the method `buildBasicExpression` or `buildFilterExpression` can be as complex as you need, in this case it is a simple *like* expression.

```js
const filterExpr = FilterExpressionUtils.buildExpressionLike('EMPLOYEENAME', 'Caroline');
const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);

this.table.queryData(basicExpr);
```

The **filter* sent to the backend results like the following:

```json
"filter": {
  "@basic_expression": {
    "lop": "EMPLOYEENAME",
    "op": "LIKE",
    "rop": "%Caroline%"
  }
}
```

It is possible to include additional filters that doesn't belong to the *Basic expression*:

```js
const filterExpr = FilterExpressionUtils.buildExpressionLike('EMPLOYEENAME', 'Caroline');
const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);

basicExpr['EMPLOYEETYPEID'] = 1;

this.table.queryData(basicExpr);
```

```json
"filter": {
  "@basic_expression": {
    "lop": "EMPLOYEENAME",
    "op": "LIKE",
    "rop": "%Caroline%"
  },
  "EMPLOYEETYPEID": 1
}
```
