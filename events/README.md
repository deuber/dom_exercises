# DOM Example - Events

We're going to practice listening for DOM events.

We've already used JavaScript to select HTML elements and retrieve
their values and change their properties.

Now, we can also use JavaScript to notify us when certain events
occur. For example, we can detect when buttons are clicked, when the
mouse moves, when keys are pressed, and when forms are submitted.

- Look at `events.html` and open it in Chrome.
- Open `events.js` in Sublime, this is where we will be working.

## Part 1

- Use `.addEventListener` to listen for the `click` event on the
`<button>`.
- Pop up an `alert()` whenever such a click occurs.

var clicker = document.querySelector("#clicker");

clicker.addEventListener("click", function (event) {
  alert("Hello, world");
});


## Part 2

- Change the `backgroundColor` of the box to `yellow` when the mouse
  is over it.
- Change back to `green` when the mouse leaves the box.
- The `mouseover` and `mouseout` events may be of use.

var test = document.getElementById("mouser");

test

test.addEventListener("mouseleave", function( event ) {
	event.target.style.backgroundColor = "purple";
})

test.addEventListener("mouseover", function( event ) {
	event.target.style.backgroundColor = "red";
	co
})



## Part 3

- Add a `submit` event to the `<form>` element.
- `alert()` the text that is typed into the text field.
- Notice that the page refreshes (see the URL bar).

var x = document.querySelector("form")

x.addEventListener("submit", function( event ) {
	var name = document.querySelector("input").value
	alert(name)
})






## Part 4

- Why was the page refreshing in Part 3?
- Use `event.preventDefault()` to prevent this from happening.



## Part 5

- Listen for the `click` event on the `<ul>` element.
- Use `event.target` to see which `<li>` was clicked.
    - `alert()` the specific vegetable that was selected.
- Make sure you only use one event listener instead of adding an event
  handler to each `<li>`.

  

## Part 6

- Move the `<script>` element into the `<head>` element.
- All your event listeners should break.  Why? What errors do you see
  in your JavaScript Console?
- Listen for the `load` event on the `window` object and put your
  other code inside of the new handler to get things working again.

## Questions

- What does `event.preventDefault()` do?
- Why do we listen for the `submit` event on a `<form>` instead of
  listening for the `click` event on the submit button?
- What does the `window`'s `load` event allow us to do?
