---
date: '2022-02-26'
title: 'JavaScript Style Guide & Coding Conventions'
thumbnail: '/thumbnails/js.png'
slug: 'javascript-coding-conventions'
tag: 'javascript'
canonicalUrl: 'https://bobirrahmatov.tech/blog/javascript-coding-conventions/'
---

JavaScript is a text-based programming language that is used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give general structure and style to web pages, JavaScript gives web pages interactive elements that engage a user. For example, a search box on the Amazon's website or refreshing your Facebook's feeds. Every programming language has it own conventions and style guides. JavaScript has also some coding standards and conventions. Creating large programs and software code becomes too messy and unmaintainable if coding standards and conventions of the programming language are not followed, especially if there are multiple people working on the same project. It is always easier to maintain the code when coding and styling guidance is followed. 

## 🤔 So what are style & coding conventions?

In this article, these basic conventions and guidelines are covered: 

- Indentation
- Spaces & all brackets
- Variable declaration
- Object guidelines
- CamelCasing for naming objects, functions, and instances
- Classes & Constructors
- Commenting

**Indentation**

We always indent our code using two spaces & our code must not end with trailing `whitespaces` 

```js
if (num === 1) {
  for (i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      //your code
    } else if (array[i] === array.length) {
      // your code
    }
  }
}
```
Multiline imports should be indented just like multiline array and object literals.eslint: [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)

```js
// bad
import {longNameA, longNameB, longNameC, longNameD, longNameE} from './src';

// good
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE,
} from './src';
```

> Why? The curly braces follow the same indentation rules as every other curly brace block in the style guide, as do the trailing commas.

**Spaces & all brackets**

Blank spaces should always be used in the following circumstances: 

- A keyword followed by `‘‘` or `‘’` must provide whitespaces before and after it.
- All keywords like `‘function’`, `‘typeof’` etc needs extra attention for whitespaces & a space provided after it. 

```js
let integer = function (
	value,
	default_value
) {
	value = resolve(value);
	return (10*value);
};
```

Use line breaks after open and before close `array brackets` if an array has multiple lines: 

```js
// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```
It is always a good practice to follow not to add spaces inside brackets. eslint: [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing.html):

```js
// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);
```

It is advised to add spaces inside curly braces. eslint: [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing.html):

```js
// bad
const foo = {clark: 'kent'};

// good
const foo = { clark: 'kent' };
```

**Variable declaration**

Every variable in the coding should be declared. Always use `const` or `let` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace.

```js
// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();

// bad
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

**Objects**

Using the literal syntax and shorthand method for object creation.eslint: `[o-new-object]` is a good approach: 

```js
// bad
const objectName = new Object();

// good
const objectName = {};

//shorthand

// bad
const objectName = {
  value: 1,

  addValue: function (value) {
    return objectName.value + value;
  },
};

// good
const objectName = {
  value: 1,

  addValue(value) {
    return objectName.value + value;
  },
};
```
**Blank lines are not harmful**

Using blank lines to separate unrelated lines of code. It improves readability and understanding the code. I always try to keep the code length less than `80 characters` at one line. If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma.

Without blank lines:

```js
if (num === 1) {
  for (i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      //some code
    } else if (array[i] === array.length) {
      // code
    }
  }
}
```

With blank lines:

```js
if (num === 1) {
  for (i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      //some code
    } else if (array[i] === array.length) {
      // code
    }
  }
}
```

**Naming convention & CamelCase**

ECMAScript uses camelCase convention. You should too when naming Variables and Functions. And try to use meaningful names for those variables and functions and keep them short. On the other hand, use PascalCase only when naming constructors or classes.

PascalCase: 

```js
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```
CamelCase: 

```js
// bad
const THISisMYOBJECT = {};
const THIS_IS_my_OBJECT = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

## Function Naming

In Javascript, all we do is make functions in the form of callbacks and events. Author of [Maintainable Javascript](https://www.oreilly.com/library/view/maintainable-javascript/9781449328092/) Nicholas Zakas introduces some common conventions for functions. I find this helpful:

- can Function that returns a boolean
- has Function that returns a boolean
- is a Function that returns a boolean
- get Function that returns a non boolean
- set Function that is used to save a value

**Classes & Constructors**

Constructors are functions too and are used to create objects via a new operator. But avoid using camelCase and use PascalCase instead.

It is helpful since JavaScript uses the same for naming pre-defined constructors.

Always use `class`. Avoid manipulating prototype directly.

> Why? class syntax is more concise and easier to reason about.

```js
// bad
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

// good
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}
```

It’s okay to write a custom `toString()` method, just make sure it works successfully and causes no side effects. 

```js
class Name {
  constructor(options = {}) {
    this.name = options.name || 'no name';
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Name is - ${this.getName()}`;
  }
}
```

**Comments**

For single-line comments, I observed this when using JSLint, after `//` use a space between them(the two slashes) and the comment.

```js
// Single-Line Comment
function getType() {
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

//Multi-Line Comment
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}
```
## 🔥 Conclusion

Having consistent formatting and styling across your code can save a lot of time, especially when collaborating with other developers. I know this can be stresfull, therefore, there is an alternative that works for me most of the time, is the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) package that I use in the text editor [VS Code](https://code.visualstudio.com/). I hope you enjoyed reading this post. 
