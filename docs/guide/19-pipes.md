---
layout: default
title: "Pipes"
permalink: /guide/pipes/
parent: Guide
nav_order: 6
---

{% include base_path %}
{% include toc %}

This section describes the **OntimizeWeb** pipes an how to use them.

# **OntimizeWeb** Pipes

Pipes in Angular are used to transform data before it is displayed in the view. **OntimizeWeb** provides several pipes designed to transform different types of data, such as monetary values, icons, integers, and dates. Below is an overview of each available pipe.

---

## **oCurrency**
**Description:**
This pipe is designed to format numeric values into a currency format, allowing customization of details such as currency symbol, symbol position, decimal digits, and thousand/decimal separators.

**Parameters:**
- **currencySimbol:** Currency symbol (e.g., "$", "€").
- **currencySymbolPosition:** Position of the currency symbol, can be "left" or "right".
- **grouping:** Indicates whether to group thousands.
- **thousandSeparator:** The separator for thousands (e.g., ",").
- **decimalSeparator:** The separator for decimals (e.g., ".").
- **minDecimalDigits:** Minimum number of decimal digits.
- **maxDecimalDigits:** Maximum number of decimal digits.

**Example:**


```html
{% raw %}
<span>{{ 1234.56 | oCurrency: { currencySimbol: '$', currencySymbolPosition: 'before', thousandSeparator: ',', decimalSeparator: '.', minDecimalDigits: 2, maxDecimalDigits: 2 } }}</span>
{% endraw %}
```


## **oIcon**

**Description:**
The `oIcon` pipe transforms the text value into a specific icon, using the provided parameters. It is useful when you want to display icons instead of text or when you need to incorporate representative images in the user interface.

**Parameters:**

- **iconPosition:** Position of the icon within the container, can be "left" or "right".
- **icon:** Name of the icon to display.

**Example:**

```html
<i [innerHTML]="'check' | oIcon:{ iconPosition: 'left', icon: 'fa-check' }"></i>
```

## **oInteger**

**Description:**
The `oInteger` pipe is used to format integer numbers. It can add thousand separators, handle locales, and manage how numbers are grouped. This is useful for displaying large numbers in a more readable format.

**Parameters:**

- **grouping:** Indicates if thousands should be grouped.
- **thousandSeparator:** The separator for thousands (e.g., ",").
- **locale:** The locale to use for number localization.

**Example:**

```html
{% raw %}
<span>{{ 1234567 | oInteger:{ grouping: true, thousandSeparator: ',' } }}</span>
{% endraw %}
```

## **oMoment**

**Description:**
The `oMoment` pipe is used to format dates into a readable format. It allows customization of the date format based on user requirements. This pipe utilizes the `MomentService` to parse and format the date value.

**Parameters:**

- **format:** The desired date format (e.g., `"YYYY-MM-DD"`, `"MM/DD/YYYY"`).

**Example:**
```html
{% raw %}
<span>{{ '2025-03-19T12:00:00Z' | oMoment:{ format: 'MM/DD/YYYY' } }}</span>
{% endraw %}
```

## **oPercent**

**Description:**
The `oPercent` pipe is used to format numbers as percentages. It provides options for grouping thousands, setting decimal separators, and defining the base value for percentage calculations.

**Parameters:**

- **grouping:** Indicates whether thousands should be grouped.
- **thousandSeparator:** The separator for thousands (e.g., `","`).
- **locale:** The locale used for number localization.
- **decimalSeparator:** The separator for decimal values (e.g., `"."`).
- **minDecimalDigits:** Minimum number of decimal places.
- **maxDecimalDigits:** Maximum number of decimal places.
- **valueBase:** The base value for percentage calculations (`1` or `100`).

**Example:**

```html
{% raw %}
<span>{{ 0.85 | oPercent:{ grouping: true, thousandSeparator: ',', decimalSeparator: '.', minDecimalDigits: 2, maxDecimalDigits: 2, valueBase: 100 } }}</span>
{% endraw %}
```

## **oReal**

**Description:**
The `oReal` pipe is used to format real (floating-point) numbers. It allows customization of separators, decimal places, and number grouping.

**Parameters:**

- **grouping:** Indicates whether thousands should be grouped.
- **thousandSeparator:** The separator for thousands (e.g., `","`).
- **locale:** The locale used for number localization.
- **decimalSeparator:** The separator for decimal values (e.g., `"."`).
- **minDecimalDigits:** Minimum number of decimal places.
- **maxDecimalDigits:** Maximum number of decimal places.
- **truncate:** Indicates whether to truncate extra decimal digits.

**Example:**

```html
{% raw %}
<span>{{ 1234.567 | oReal:{ grouping: true, thousandSeparator: ',', decimalSeparator: '.', minDecimalDigits: 2, maxDecimalDigits: 3, truncate: true } }}</span>
{% endraw %}
```

## **oTranslate**

**Description:**
The `oTranslate` pipe is used to translate text based on the current language. It automatically updates the translated text when the language changes. The pipe works by subscribing to the `onLanguageChanged` event from the `OTranslateService`.

**Parameters:**

- **text:** The text to be translated.
- **args:** An optional argument that can include values to replace placeholders in the translation string (e.g., `values: ['value1', 'value2']`).

**Example:**

```html
{% raw %}
<span>{{ 'hello' | oTranslate:{ values: ['world'] } }}</span>
{% endraw %}
```

## **orderBy**

**Description:**
The `orderBy` pipe is used to sort an array based on the values of a given property or multiple properties. It allows sorting in ascending or descending order. The pipe can handle both simple arrays and arrays of objects with specified properties.

**Parameters:**

- **input:** The array to be sorted.
- **config:** An optional array that defines the properties to sort by. Each element in the array can be:
  - A string representing a property to sort by, with an optional `+` (ascending) or `-` (descending) sign (e.g., `+property`, `-property`).
  - If not provided, the default behavior is to sort the array alphabetically or numerically.

**Example:**

```html
{% raw %}
<!-- Sort an array of numbers in ascending order -->
<span>{{ [3, 1, 2] | orderBy }}</span>

<!-- Sort an array of objects by the 'name' property in ascending order -->
<span>{{ [{name: 'John'}, {name: 'Jane'}] | orderBy:'name' }}</span>

<!-- Sort an array of objects by 'age' property in descending order -->
<span>{{ [{name: 'John', age: 30}, {name: 'Jane', age: 25}] | orderBy:'-age' }}</span>

<!-- Sort an array by multiple properties -->
<span>{{ [{name: 'John', age: 30}, {name: 'Jane', age: 25}] | orderBy:['-age', 'name'] }}</span>
{% endraw %}
```


