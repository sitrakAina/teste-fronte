## CSS UI - Dropdown menu

Simple dropdown menu.

## Installation

```
npm install --save css-ui-dropdown-menu
```

## Demo

- https://css-ui.github.io/dropdown.menu/light
- https://css-ui.github.io/dropdown.menu/dark

## Quick start

CSS dependencies.

```html
<link rel="stylesheet" href="path/to/normalize.css">
<link rel="stylesheet" href="path/to/font-awesome.css">
<link rel="stylesheet" href="path/to/open-sans.css">
<link rel="stylesheet" href="path/to/cssui.css">
```

CSS dropdown.

```html
<link rel="stylesheet" href="path/to/style.dropdown.css">
```

CSS light or dark theme. Choose one.

```html
<link rel="stylesheet" href="path/to/style.dropdown.light.css">
<link rel="stylesheet" href="path/to/style.dropdown.dark.css">
```

Use Open Sans fotns.

```css
font-family: 'Open Sans', sans-serif;
```

Dropdown menu html.

```html
<div class="dropdown">

	<!-- dropdown menu click -->
	<div class="clear">
		<a class="employ-toggle click float right" href="#">
			<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
		</a>
	</div>

	<!-- show/hide menu -->
	<ul class="expand-dropdown">
		<li><a href="#" class="top">One</a></li>
		<li><a href="#">Two</a></li>
		<li><a href="#" class="bottom">Three</a></li>
	</ul>
</div>
```

javascript libraries and plugins.

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/dropdown.menu.js"></script>
```
Enjoy dropdown menu.
