# Emergency Service Directory

A comprehensive emergency service directory website built with Html, TypeScript, and Tailwind CSS. This application provides quick access to emergency contact numbers with interactive features including call tracking, favorites, and clipboard functionality.

## Features

### Main Requirements

1. **Navbar**
   - Website name & logo on the left
   - Heart icon with favorite count
   - Coin count (starts at 100)
   - Copy count display

2. **Hero Section**
   - Background gradient
   - Government logo at top-center
   - "Emergency Service Directory" title
   - Relevant slogan at bottom

3. **Emergency Service Cards**
   - 9 emergency service cards with:
     - Icon or emoji representation
     - Service name in local language
     - Service name in English
     - Hotline number for calling
     - Category badge with color coding
     - Heart icon for favorites
     - Copy and Call buttons with icons

4. **Call History Section**
   - White background
   - History title with icon
   - Clear History button
   - Displays called services with timestamps

### Functionalities

- **Heart Icons**: Clicking increases count in navbar (one-time per service)
- **Call Buttons**: 
  - Shows alert with service name and number
  - Deducts 20 coins per call
  - Prevents calls if insufficient coins
  - Adds service to call history with timestamp
- **Copy Buttons**: 
  - Copies number to clipboard
  - Increases copy count
  - Shows confirmation alert
- **Call History**: 
  - Displays all called services
  - Shows service name, number, and call time
  - Clear History button removes all data

### Responsive Design

The website is fully responsive for both mobile and desktop devices:
- Mobile-first design approach
- Responsive grid layout for cards (1 column on mobile, 2 on tablet, 3 on desktop)
- Flexible navigation and hero section
- Adaptive sidebar layout for call history

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: PNPM

## JavaScript Questions & Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**getElementById:**
- Returns a single element with the specified ID
- ID must be unique in the document
- Returns null if no element is found
- Fastest method for selecting elements
- Example: `document.getElementById('myButton')`

**getElementsByClassName:**
- Returns a live HTMLCollection of all elements with the specified class name
- Collection updates automatically when DOM changes
- Returns empty collection if no elements found
- Can be called on any element, not just document
- Example: `document.getElementsByClassName('card')`

**querySelector:**
- Returns the first element that matches the CSS selector
- Uses CSS selector syntax (more flexible)
- Returns null if no match found
- Slower than getElementById but more versatile
- Example: `document.querySelector('.card:first-child')`

**querySelectorAll:**
- Returns a static NodeList of all elements matching the CSS selector
- NodeList doesn't update automatically when DOM changes
- Returns empty NodeList if no matches
- More flexible than getElementsByClassName
- Example: `document.querySelectorAll('.card')`

### 2. How do you create and insert a new element into the DOM?

Creating and inserting elements involves several steps:

**Step 1: Create the element**
```javascript
const newDiv = document.createElement('div');
```

**Step 2: Set attributes and content**
```javascript
newDiv.className = 'card';
newDiv.id = 'newCard';
newDiv.textContent = 'Hello World';
// or
newDiv.innerHTML = '<h3>Title</h3><p>Content</p>';
```

**Step 3: Insert into DOM**
There are several methods to insert:

- `appendChild()`: Adds as last child
- `insertBefore()`: Inserts before specified element
- `prepend()`: Adds as first child
- `append()`: Adds as last child (newer method)
- `insertAdjacentElement()`: More precise positioning

**Examples:**
```javascript
// Add as last child
parentElement.appendChild(newDiv);

// Add as first child
parentElement.prepend(newDiv);

// Insert before specific element
parentElement.insertBefore(newDiv, referenceElement);

// Using insertAdjacentElement
targetElement.insertAdjacentElement('beforebegin', newDiv);
```

### 3. What is Event Bubbling and how does it work?

Event bubbling is the process where an event triggered on a child element propagates up through its parent elements in the DOM hierarchy.

**How it works:**
1. Event occurs on target element (deepest element)
2. Event "bubbles up" through each parent element
3. Event handlers on parent elements can catch the event
4. Process continues until reaching the document root

**Example:**
```html
<div id="parent">
  <div id="child">
    <button id="button">Click me</button>
  </div>
</div>
```

When button is clicked:
1. Button's click handler executes (if any)
2. Child div's click handler executes (if any)
3. Parent div's click handler executes (if any)
4. Document's click handler executes (if any)

**Practical use:**
```javascript
document.getElementById('parent').addEventListener('click', function(e) {
  console.log('Parent clicked:', e.target.id); // Shows which child was actually clicked
});
```

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where you attach a single event listener to a parent element to handle events for multiple child elements, using event bubbling.

**How it works:**
Instead of adding listeners to each child element, you add one listener to the parent and check which child triggered the event using `event.target`.

**Example:**
```javascript
// Instead of adding listeners to each button
document.getElementById('cardContainer').addEventListener('click', function(e) {
  if (e.target.classList.contains('call-button')) {
    handleCallClick(e.target);
  } else if (e.target.classList.contains('copy-button')) {
    handleCopyClick(e.target);
  }
});
```

**Benefits:**
1. **Performance**: Fewer event listeners means better memory usage
2. **Dynamic content**: Works with elements added after page load
3. **Simplified maintenance**: One listener handles multiple elements
4. **Reduced memory leaks**: Fewer listeners to clean up
5. **Code organization**: Centralized event handling logic

**Use cases:**
- Lists with many items
- Dynamically generated content
- Large tables or grids
- Card collections (like our emergency services)

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Both methods are used to control event behavior, but they serve different purposes:

**preventDefault():**
- Prevents the default action associated with the event
- Does NOT stop event propagation
- Event continues to bubble up to parent elements
- Commonly used with form submissions, link clicks, etc.

**Examples of preventDefault():**
```javascript
// Prevent form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Form won't submit
  // Custom validation logic here
});

// Prevent link navigation
link.addEventListener('click', function(e) {
  e.preventDefault(); // Won't navigate to href
  // Custom action instead
});
```

**stopPropagation():**
- Stops the event from bubbling up to parent elements
- Does NOT prevent the default action
- Event handlers on current element still execute
- Prevents parent event handlers from firing

**Examples of stopPropagation():**
```javascript
// Stop event from reaching parent
childElement.addEventListener('click', function(e) {
  e.stopPropagation(); // Parent won't receive this click
  // Handle child-specific logic
});
```

**Using both together:**
```javascript
button.addEventListener('click', function(e) {
  e.preventDefault(); // Don't follow link if it's in an <a> tag
  e.stopPropagation(); // Don't trigger parent click handlers
  // Custom button logic here
});
```

**Key differences:**
- `preventDefault()`: Controls browser behavior
- `stopPropagation()`: Controls event flow through DOM
- They are independent and can be used together
- `stopImmediatePropagation()`: Stops both propagation and other listeners on same element

## Installation and Setup

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start development server: `pnpm dev`
4. Build for production: `pnpm build`

## Project Structure

```
client/
├── pages/
│   └── Index.tsx          # Main application component
├── App.tsx               # Application entry point
��── global.css           # Global styles and Tailwind CSS

server/                  # Express server (if needed)
shared/                  # Shared types and interfaces
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is developed for educational purposes as part of a web development assignment.
