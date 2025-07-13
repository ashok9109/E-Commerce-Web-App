<a href="#installation" width="100%">
<img src="banner.svg" alt="Title banner"/>
</a>

## Tailwind CSS Reflection

[![npm version](https://badge.fury.io/js/@designbycode%2Ftailwindcss-reflection.svg)](https://badge.fury.io/js/@designbycode%2Ftailwindcss-reflection)
![npm](https://img.shields.io/npm/dt/%40designbycode/tailwindcss-reflection)
![NPM](https://img.shields.io/npm/l/%40designbycode%2Ftailwindcss-reflection)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40designbycode%2Ftailwindcss-reflection)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/tailwindcss-reflection?style=social)](https://github.com/DesignByCode/tailwindcss-reflection/stargazers)
[![HitCount](https://hits.dwyl.com/designbycode/tailwindcss-reflection.svg?style=flat)](http://hits.dwyl.com/designbycode/tailwindcss-reflection)

[![NPM](https://nodei.co/npm/@designbycode/tailwindcss-reflection.png)](https://nodei.co/npm/@designbycode/tailwindcss-reflection/)

The Tailwind CSS plugin for adding reflections to elements.

## 📇 Table of Contents

* [Installation](#installation)
    * [Using pnpm](#using-pnpm)
    * [Using npm](#using-npm)
    * [Using yarn](#using-yarn)
* [Usage](#usage)
* [Utilities](#utilities)
* [Applying Reflections](#applying-reflections)
* [Configuration](#configuration)
* [Example](#example)
* [Modifiers](#modifiers)
  * [Position and direction](#position-and-direction)
  * [Reflection offset](#reflection-offset)
  * [Reflection opacity](#reflection-opacity)
* [Contributing](#contributing)
* [License](#license)
* [Author](#author)
* [Acknowledgments](#acknowledgments)


## Installation

To use this plugin, you need to install it via pnpm, npm or yarn.

#### Using pnpm

```bash
pnpm add -D @designbycode/tailwindcss-reflection
```

#### Using npm

```bash
npm install --save-dev @designbycode/tailwindcss-reflection
```

#### Using yarn

```bash
yarn add -D @designbycode/tailwindcss-reflection
```

## Usage

Once the plugin is installed, you can enable it in your Tailwind CSS configuration file. Usually, this file is named tailwind.config.js.

```javascript
module.exports = {
    // ...other configurations
    plugins: [
        // ...other plugins
        require("@designbycode/tailwindcss-reflection"),
    ],
};
```

## Utilities

The plugin generates several utility classes for applying reflection to elements.

## Applying Reflections

To make it work you only need to add the class of ```.reflect``` to you html. The rest off the classes is just modifiers.

```html

<div class="reflect"></div>
```

## Configuration

The plugin allows you to customize the text-glitch by modifying the theme object in your Tailwind CSS configuration file.

```javascript
// tailwind.config.js

module.exports = {
    // ...other configurations
    plugins: [
        // ...other plugins
        require("@designbycode/tailwindcss-reflection"),
    ],
    theme: {
        position: {
            none: "none",
            above: "above",
            below: "below",
            left: "left",
            right: "right",
        },
        offset: {
            0: "0",
            1: "0.25rem",
            2: "0.5rem",
            3: "0.75rem",
            4: "1rem",
            5: "1.5rem",
            6: "2rem",
            7: "3rem",
            8: "4rem",
            9: "5rem",
            10: "6rem",
        },
        opacity: {
            0: "0",
            5: "0.05",
            10: "0.1",
            15: "0.15",
            20: "0.2",
            25: "0.25",
            30: "0.3",
            40: "0.4",
            45: "0.45",
            50: "0.5",
            55: "0.55",
            60: "0.6",
            70: "0.7",
            75: "0.75",
            80: "0.8",
            85: "0.85",
            90: "0.9",
            95: "0.95",
            100: "1",
        },
    },
};

```

## Example

Here's an example of how you can use the utility classes to apply reflections:

```html

<div class="reflect">
    Reflection
</div>

```

## Modifiers

### Position and direction

Change position of reflection direction by using duration modifiers.

```html

<div class="reflect reflect-left">
    Glitch Effect
</div>

```

### Reflection offset

```html

<div class="reflect reflect-offset-3">
    Glitch Effect
</div>
// or
<div class="reflect reflect-offset-[10px]">
    Glitch Effect
</div>

```

### Reflection opacity

```html

<div class="reflect reflect-below reflect-opacity">
    Glitch Effect
</div>

```


## Contributing

Contributions to this plugin are welcome! If you encounter any issues, have feature requests, or want to improve the plugin, feel free to create a pull request or submit an issue on the GitHub repository.

## License

This project is licensed under the [MIT](LICENCE) License - see the [LICENSE](LICENCE) file for details.

## Author

<div>
<img  align="left" style="box-shadow:3px 3px 3px rgba(0,0,0,75);border-radius:1rem;border:solid 2px rgba(255,225,225,.25)" src="https://github.com/designbycode.png?size=130" alt="Claude Myburgh">
</div>
<h2 style="margin-top:0">Claude Myburgh</h2><ul style="padding-left:0;margin-top:-.63rem;list-style:none"><li>Github:<a href="https://github.com/designbycode"> @designbycode</a></li><li>Npm:<a href="https://www.npmjs.
com/~designbycode_"> @designbycode_</a></li></ul>

## Acknowledgments

- This plugin is inspired by the needs of web developers using Tailwind CSS.
- Special thanks to the Tailwind CSS team for creating such an amazing framework.











