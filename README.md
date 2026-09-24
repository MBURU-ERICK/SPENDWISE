# SpendWise Budget Tracker

SpendWise is a simple Budget Tracker application designed to help users record and view their daily expenses.

The project was originally created as a basic Budget Tracker and has been improved using CSS to create a cleaner, more professional, and user-friendly interface.

## Project Files

```text
SpendWise/
│
├── index.html
├── style.css
├── budget-icon.png
└── README.md
```

## What I Built

The SpendWise Budget Tracker allows users to:

* Enter an expense name.
* Enter an expense amount.
* Select an expense category.
* Add an expense using the Add Expense button.
* View recorded expenses in a table.
* View budgeting tips.
* Read instructions on how to use the tracker.

This week's work focused on improving the visual design using CSS without adding new HTML functionality.

## CSS Design Improvements

### 1. Color Palette

A consistent green-based color palette was selected for the application.

The main colors include:

* Dark green for headings.
* Green for buttons and table headers.
* Light green for hover effects and alternating table rows.
* White for the main content cards.
* Light gray/green for the page background.

This creates a consistent visual identity throughout the application.

### 2. Typography

Google Fonts are used to improve readability and visual hierarchy.

Two fonts are used:

* **Poppins** – used for the main headings.
* **DM Sans** – used for body text, forms, buttons, and table content.

The different fonts help distinguish headings from normal content.

### 3. Add Expense Form

The Add Expense section has been styled as a separate card.

The form uses:

* Padding for internal spacing.
* Margins between form controls.
* Borders around input fields.
* Rounded corners.
* Focus effects when an input is selected.
* A consistent green button design.
* Hover effects on the button.

### 4. Expense Table

The expense table has been improved with:

* A green table header.
* White header text.
* Padding inside table cells.
* Borders for structure.
* Alternating row colors.
* Hover effects.
* Rounded corners.
* Consistent typography.

The alternating row colors make the expense records easier to read.

### 5. CSS Box Model

The CSS Box Model was intentionally used throughout the application.

The project uses:

* **Margin** to separate different sections.
* **Padding** to create space inside cards, forms, and table cells.
* **Borders** to define cards, inputs, and table areas.
* **Border-radius** to create modern rounded sections.
* **Box-sizing: border-box** to make element sizing predictable.

The page heading, Add Expense form, and Expense Table are presented as distinct visual cards.

## Main HTML Sections

### Header

The header contains:

* SpendWise title.
* Budget tracker logo.
* Short description.

It is styled as the main introductory card.

### Add Expense Section

This section contains the form used to enter expense information.

It includes:

* Expense name input.
* Amount input.
* Category dropdown.
* Add Expense button.

### Expense Section

This section contains the expense table showing:

* Expense name.
* Amount.
* Category.
* Date.

### Budgeting Tips

An embedded YouTube video provides budgeting tips for users.

### How to Use

The `<details>` and `<summary>` elements provide instructions for using the tracker.

## Technologies Used

* HTML5
* CSS3
* Google Fonts

## CSS Concepts Demonstrated

This project demonstrates the following CSS concepts:

* Universal selector
* Element selectors
* Class selectors
* ID selectors
* Descendant selectors
* Direct child selectors
* Pseudo-classes
* `:focus`
* `:hover`
* `:nth-child()`
* `:not()`
* CSS variables
* Box model
* Padding
* Margin
* Borders
* Border radius
* CSS Grid concepts from the previous version
* Responsive media queries

## Conclusion

The existing SpendWise Budget Tracker was enhanced using CSS to provide a more polished and organized interface. The improvements focus on color consistency, typography, form styling, table readability, spacing, borders, and the CSS Box Model while keeping the original project structure and functionality.
