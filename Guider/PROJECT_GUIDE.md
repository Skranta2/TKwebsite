# Owner's Manual: Your New Website

This guide provides a detailed breakdown of your website project. Use it as a reference to understand how everything works together, making it easier for you to make future updates with confidence.

---

### **Part 1: The File & Folder Structure (The Blueprint)**

Your project is organized like a filing cabinet. Each file and folder has a specific job, which keeps the project clean and easy to manage.

*   `public_html/` (The Main Project Folder)
    *   `index.html`: Your **English homepage**. This is the default page for your website.
    *   [styles.css](cci:7://file:///Users/stefantillman/Desktop/TK%20website/public_html/styles.css:0:0-0:0): The **master stylesheet**. It controls the colors, fonts, layout, and overall design of *every single page* on your site. Think of it as the "Interior Decorator."
    *   `images/`: A folder to store your images (e.g., `appstore.png`).
    *   [js/](cci:7://file:///Users/stefantillman/Desktop/TK%20website/public_html/js/main.js:0:0-0:0): This folder holds your JavaScript files.
        *   [main.js](cci:7://file:///Users/stefantillman/Desktop/TK%20website/public_html/js/main.js:0:0-0:0): This file contains all the **interactive magic** for the site, like the mobile menu and the interactive service cards.
    *   `en/`: A folder for all **English-specific sub-pages**.
        *   `app-details.html`: The detailed page for your app, in English.
    *   `sv/`: A folder for all **Swedish pages**.
        *   `index.html`: Your **Swedish homepage**.
        *   `app-details.html`: The detailed page for your app, in Swedish.

**How it works:** This structure keeps things organized. When a page inside a folder (like `sv/index.html`) needs to access a file in the main folder (like [styles.css](cci:7://file:///Users/stefantillman/Desktop/TK%20website/public_html/styles.css:0:0-0:0)), it uses a path like `../styles.css`. The `../` simply means "go up one folder level."

---

### **Part 2: The HTML Files (The Skeleton)**

Your `.html` files provide the structure and content for each page. They are built with standard sections.

*   **`<head>` section:** The "brain" of the page. It's not visible to the user, but it tells the browser critical information:
    *   `<title>`: The text that appears in the browser tab.
    *   `<link rel="stylesheet" href="styles.css">`: This is a crucial line that tells the HTML file to apply all the design rules from your [styles.css](cci:7://file:///Users/stefantillman/Desktop/TK%20website/public_html/styles.css:0:0-0:0) file.
*   **`<body>` section:** This contains everything you can see on the page.
    *   **`<nav class="navbar">`:** The navigation bar at the top. It's designed to be consistent on every page.
    *   **`<main>`:** The main, unique content of the page.
    *   **`<footer>`:** The footer at the very bottom with your copyright information.

**Key HTML Concepts:**

*   **`id="services"`:** An `id` is a unique name for **one specific element** on a page. In the navigation bar, a link like `<a href="#services">` will smoothly scroll the user down to the element with that `id`.
*   **`class="service-card"`:** A `class` is a reusable name you can give to **multiple elements**. We give every service card the same class so we can style them all at once in the CSS and control them with JavaScript.

---

### **Part 3: The CSS File (The Style & Design)**

Your [styles.css](cci:7://file:///Users/stefantillman/Desktop/TK%20website/public_html/styles.css:0:0-0:0) file is where the visual design comes to life.

*   **`:root { ... }` (CSS Variables):** At the top of [styles.css](cci:7://file:///Users/stefantillman/Desktop/TK%20website/public_html/styles.css:0:0-0:0), we define your site's main colors (e.g., `--primary-color: #00aaff;`). If you ever want to change the accent color of your entire website, you only have to change it in **one place**!
*   **`@media (max-width: 768px) { ... }` (Media Queries):** This is the core of responsive design. This code block essentially says: "If the user's screen is 768 pixels wide or less (like a phone or tablet), apply these special, alternative styles." This is how we handle the mobile layout.

#### **Feature: The Interactive Service Cards (Accordion)**

This feature makes the "Our Services" section interactive.

1.  **Hiding the Text (`.service-card p`):** By default, we set the description paragraph's `max-height` and `opacity` to `0`. This makes the text invisible and collapsed, showing only the icon and title.
2.  **The Glow Effect (`.service-card:hover`):** We use `box-shadow` to create a soft, blue glow around a card when you hover over it or click on it. This signals to the user that it's interactive.
3.  **Revealing the Text (`.service-card.active p`):** When a card gets the `.active` class from our JavaScript, this CSS rule overrides the hidden state. It gives the paragraph height and makes it visible, creating the dropdown effect.
4.  **Smoothness (`transition`):** This property is used to animate the changes (the glow, the text expanding). It makes the effects appear smoothly instead of instantly.

---

### **Part 4: The JavaScript File (The Interactivity)**

Your [js/main.js](cci:7://file:///Users/stefantillman/Desktop/TK%20website/public_html/js/main.js:0:0-0:0) file makes the page interactive. All the code is wrapped in a `DOMContentLoaded` event listener.

*   **`DOMContentLoaded` Wrapper:** This is a critical safety net that ensures our JavaScript only runs *after* the entire HTML page has finished loading. This prevents errors.

#### **Feature: The Mobile Burger Menu**

*   This code "grabs" the burger icon and the navigation links from the HTML.
*   It listens for a `click` on the burger.
*   When clicked, it uses `classList.toggle()` to add or remove classes (`nav-active` and `toggle`) that trigger the CSS animations to show/hide the menu and animate the burger icon into an 'X'.

#### **Feature: The Service Card Accordion**

*   **Gathering the Cards:** The line `querySelectorAll('.service-card')` finds all the service cards on the page and puts them in a list.
*   **Listening for Clicks:** The code then loops through each card and attaches a `click` listener to it.
*   **The Logic:** When a card is clicked:
    1.  It first **closes all other cards** by removing the `.active` class from them. This ensures only one card is open at a time.
    2.  It then checks if the card you clicked was already open.
    3.  If it was **not** already open, it adds the `.active` class to it, which triggers the CSS to reveal the text. If it **was** already open, this step is skipped, and the card simply stays closed. This allows you to toggle a card by clicking it again.