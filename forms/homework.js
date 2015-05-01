# DOM Example - Forms

- Look at `forms.html` and open it in Chrome.
- Open up Chrome DevTools.
- Do the following in the console:

## Part 1

- Use `.innerHTML` to determine the text in the `<label>` with the ID of
  `foodLabel`.
- Notice that we use `.innerHTML` to retrieve the content that sits
  between the `<label>` and `</label>` tags.

var x = document.querySelector("#foodLabel")
x.innerHTML


## Part 2

- Use JavaScript to determine what text is entered into the `<input>`
  with the ID of `foodId`.
- Notice how we can't use `.innerHTML` because there *is* no content
  between the `<input>` tags. There's not even a closing `</input>`
  tag!
- Use `.value` to retrieve the entered favorite food instead.

var x = document.querySelector("#foodId")
x.value 


## Part 3

- Use JavaScript to determine whether or not the "calm" checkbox is
  selected.
- Can you use `.innerHTML`? Is there any HTML inside of the `<input>`
  tags?
- Can you use `.value`?
- You google how to use JavaScript to determine if an HTML checkbox is
  checked and you realize everything I've told you is a lie.

var x = document.querySelector("#calmId")
x.checked


## Questions

- When can we use `.innerHTML` and when can we use `.value`?

When contents exist (text inside 2 tags), when want access the input we use attribute value

- What do you use when determining if a checkbox is checked?

.checked

