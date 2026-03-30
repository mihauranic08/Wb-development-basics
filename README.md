# WB Development Basics

Comprehensive documentation for the sample project in `wbSample00`.

## Project Overview

`wbSample00` is a front-end educational project that demonstrates core web development concepts using plain HTML, CSS, and JavaScript (no frameworks, no build tools).

The site represents a small library webpage (in Slovenian language) with:

- Structured content sections
- Responsive layout
- Interactive menu
- Search and text highlighting
- Dynamically generated data table
- Form validation
- Accessibility-focused high-contrast mode
- Scroll-to-top behavior

This repository is intended for learning and practice in:

- Semantic HTML page structure
- CSS styling and responsive design
- DOM manipulation
- Event handling
- Working with local data in JavaScript
- Basic UX and accessibility improvements

## Project Structure

```
Wb-development-basics/
├─ README.md
├─ referencni_prirocnik.pdf
└─ wbSample00/
	 ├─ index.html
	 ├─ styles.css
	 ├─ script.js
	 ├─ cobiss.js
	 └─ knjiznica.js
```

## File-by-File Explanation

### `wbSample00/index.html`

Main page and semantic structure of the application.

Includes:

- Dropdown navigation menu
- Search area (`Išči` button + high-contrast toggle)
- Content sections (categories, links, static book list, rules, contact)
- COBISS-based most borrowed books table (`#cobissTable`)
- Recommendation button (`#recommendBtn`)
- Contact form with fields for name, email, and message
- Footer with opening hours and social links
- Scroll-to-top button (`#topBtn`)

Also contains a small inline script for dropdown open/close behavior.

### `wbSample00/styles.css`

Styles for layout, typography, components, and responsive behavior.

Key style areas:

- Global page typography and spacing
- Card-like section blocks
- Table styling (headers, zebra rows, hover effect)
- Dropdown menu styling
- Form and button styling
- Search input + button pairing
- Highlight style for search matches
- Responsive media queries for tablet/mobile
- High-contrast mode class (`.high-contrast`)
- Floating scroll-to-top button styling (`#topBtn`)

### `wbSample00/cobiss.js`

Contains static dataset:

- `cobissData`: array of book objects
- Object shape: `{ descr, author, totalCount }`
- Represents most borrowed books (source noted in UI as COBISS)

This file is loaded before scripts that consume the data.

### `wbSample00/knjiznica.js`

Responsible for dynamic rendering of the COBISS table.

Behavior:

- Reads `cobissData`
- Appends one `<tr>` per book into `#cobissBody`
- Displays row number, title, author, and borrow count

### `wbSample00/script.js`

Main interactivity logic.

Implements:

- Search trigger on `#searchButton`
- Match highlighting across text elements
- Highlight cleanup before each new search
- Automatic scroll to first match
- Random book recommendation from `cobissData`
- Contact form validation rules
- Scroll event handling for top button visibility
- Smooth scroll to top on click
- High-contrast mode toggle
- Persistence of high-contrast preference via `localStorage`

## How to Run

No installation is required.

### Option 1 (quick start)

1. Open the repository folder in VS Code.
2. Open `wbSample00/index.html` in a browser.

### Option 2 (recommended for development)

Use a local static server (for consistent behavior and easier debugging).

Examples:

- VS Code Live Server extension
- Any simple static server command

## Functional Walkthrough

### 1. Navigation menu

- Click `Meni ▼` to open links.
- Click outside the menu or on a menu item to close it.

### 2. Search and highlight

- Enter text in the search input.
- Click `Išči`.
- Matching text in selected elements is wrapped in `.highlight`.
- Page scrolls to the first match.

### 3. High-contrast mode

- Click `Visok kontrast`.
- Theme switches by toggling `.high-contrast` on `<body>`.
- Setting is saved in `localStorage` and restored on reload.

### 4. Dynamic COBISS table

- Table body starts empty in HTML.
- `knjiznica.js` injects rows from `cobissData` after load.

### 5. Recommendation button

- Click `Priporoči knjigo`.
- Script chooses a random entry from `cobissData`.
- Selected title and author are shown below the button.

### 6. Contact form validation

On submit, browser default submission is prevented if any rule fails:

- Name must contain at least 3 characters
- Email must not be empty
- Message must contain at least 10 characters

### 7. Scroll-to-top button

- Appears after scrolling down the page
- On click, smooth-scrolls to top

## Script Load Order

At the bottom of `index.html`, scripts are loaded in this order:

1. Inline dropdown script
2. `script.js`
3. `cobiss.js`
4. `knjiznica.js`

Why this works:

- `cobiss.js` defines global `cobissData`
- `knjiznica.js` runs after and can safely render the table
- Recommendation handler in `script.js` references `cobissData` when clicked (after all files are loaded)

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Browser APIs:
	- DOM API
	- `localStorage`
	- `scrollIntoView`
	- `window.scrollTo`

## Learning Outcomes

After working through this project, you should understand how to:

- Connect multiple JavaScript files in one page
- Render data-driven UI from an array of objects
- Manage UI state with CSS classes
- Validate user input before form submission
- Preserve user preferences with browser storage
- Build a simple responsive and interactive web page without frameworks

## Notes

- The interface text is primarily in Slovenian.
- The project is suitable for beginner-to-intermediate front-end exercises and classroom demonstrations.

## Function Reference by Chapter

This section explains the functional building blocks used in the project, grouped into three chapters.

### Chapter 1: HHTML

The HTML layer does not define JavaScript functions, but it defines structural and semantic elements that make the application functionality possible.

- `nav`, `ul`, `li`, `a`: Build the dropdown navigation structure and in-page links.
- `input`, `button`: Provide search interaction and contrast toggle controls.
- `table`, `thead`, `tbody`, `tr`, `th`, `td`: Define the static table shell that JavaScript fills with COBISS data.
- `form`, `label`, `textarea`: Define contact input controls and submission flow.
- `id` attributes (for example `searchButton`, `cobissBody`, `topBtn`): Serve as stable DOM targets for JavaScript logic.
- Script tags at the bottom of the page: Ensure DOM elements exist before JavaScript starts binding events.
- Inline dropdown script in HTML: Handles menu open/close behavior directly in the page.

### Chapter 2: JavaScript

Below are the functions and callback handlers used across the JavaScript files.

- `removeHighlights()` in `script.js`:
	- Removes all elements with class `highlight`.
	- Restores original text nodes and normalizes parent nodes.
- `highlightText(searchTerm)` in `script.js`:
	- Scans selected page elements.
	- Wraps matched text with `span.highlight`.
	- Scrolls to the first found match.
- Search button click handler in `script.js`:
	- Reads the current search input.
	- Calls `removeHighlights()` and `highlightText(...)` when text is present.
- Recommendation button click handler in `script.js`:
	- Chooses a random index from `cobissData` using `Math.random()` and `Math.floor()`.
	- Prints a recommended title and author.
- Form submit handler in `script.js`:
	- Validates name length, email presence, and message length.
	- Calls `e.preventDefault()` when validation fails.
- Scroll handler for top button in `script.js`:
	- Shows `topBtn` after the page is scrolled beyond a threshold.
- Top button click handler in `script.js`:
	- Calls `window.scrollTo({ top: 0, behavior: "smooth" })`.
- Contrast button click handler in `script.js`:
	- Toggles `high-contrast` class on `body`.
	- Stores state with `localStorage.setItem(...)`.
- Contrast restore logic in `script.js`:
	- Reads persisted value with `localStorage.getItem(...)` and reapplies class.
- `forEach` render callback in `knjiznica.js`:
	- Iterates over `cobissData`.
	- Creates one table row per entry and appends it to `cobissBody`.
- Dropdown menu click handlers in inline script (`index.html`):
	- Toggle menu visibility with `classList.toggle("show")`.
	- Close menu on outside clicks.
	- Close menu after selecting a link.

### Chapter 3: CSS

CSS has no executable functions like JavaScript, but it uses selectors and rule blocks that function as styling modules.

- Global layout rules (`body`, `h1`, `h2`, `p`, `ul`, `li`, `ol`):
	- Control typography, spacing, page width, and baseline readability.
- Component rules (`.header`, `.section`, `footer`, `button`, `input`, `textarea`):
	- Create card-like sections, consistent controls, and visual hierarchy.
- Table styling rules (`table`, `th`, `td`, `tr:nth-child(even)`, `tr:hover`):
	- Implement readable tabular layout with striping and hover feedback.
- Dropdown rules (`.dropdown-menu`, `.menu-button`, `.dropdown-content`, `.dropdown-content.show`):
	- Provide hidden-by-default menu behavior and visible state styling.
- Search/highlight rules (`.search-container`, `#searchInput`, `#searchButton`, `.highlight`):
	- Style the search UI and emphasize matched terms.
- Top button rules (`#topBtn`):
	- Position floating action button and define visual appearance.
- High-contrast rules (`.high-contrast`, `.high-contrast a`, `.high-contrast button`):
	- Apply accessibility-focused alternate color scheme.
- Responsive media queries (`@media (max-width: 768px)`, `@media (max-width: 480px)`):
	- Adjust spacing, typography, and table density for smaller screens.
