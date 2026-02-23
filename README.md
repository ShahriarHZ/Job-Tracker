1. getElementById:Select one element by it's unique id.
   getElementByClassName:Select all element that given the same class.
   querySelector(selector):Selects the 1st element that matches the css selector.
   querySelectorAll(selector):Selects all elements that match a CSS selector.
2. We can create a new element by using document.createElement(tagName).
  and insert a new element using append().
3. Event bubbling is part of the DOM event propagation model. It defines how an event travels up the DOM tree from the element where it originated to its ancestors, giving parent elements a chance to observe or handle the same event.
4. Event delegation is a technique where you attach a single event listener to a parent element and handle events from its child elements using event bubbling.
   It reduces the number of event listeners and works for dynamically added elements, improving performance and maintainability.
5. preventDefault() : Browser’s default behavior.
   stopPropagation() : Event propagation (bubbling).
