# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Desktop View]('./public/images/Desktop_view.png')
![Desktop Empty View]('./public/images/Desktop_empty_view.png')
![Desktop Active States View]('./public/images/Active_states.png')
![Mobile View]('./public/images/Mobile_view.png')

### Links

- Solution URL: [Frontend mentor solution](https://your-solution-url.com)
- Live Site URL: [Preview Site](https://your-live-site-url.com)

## My process

### Built with

- SASS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I'm very proud of what I accomplished in this challenge, I enjoyed a lot learning and finding new tools to develop apps with react.

Below you can see some snippets of the react code used:

```js
  useEffect(() => {
    const tipPerson = customTip ? (inputData.bill * customTip / 100) / inputData.people : (inputData.bill * tip / 100) / inputData.people
    const totalPerson = customTip ? (inputData.bill * (1 + customTip / 100)) / inputData.people : (inputData.bill * (1 + tip / 100)) / inputData.people
    if (totalPerson && totalPerson !== Infinity) {
      setOutput({
        tip: tipPerson,
        total: totalPerson
      })
    } else {
      setOutput({
        tip: 0,
        total: 0
      })
    }
  }, [customTip, tip, inputData])


export default function InputBox(props) {

const handleChange = (e) => {
    props.handleChange(e.target)
}
    return (
        <div className="input--box">
            <h1 className="labels">{props.label}</h1>
            <div className={props.value === "0" ? "textbox error" : "textbox"}>
                {props.svg}
                <input className={props.value === "0" ? "error" : ""} onChange={handleChange} name={props.id} id={props.id} type="number" min="0" value={props.value} placeholder="0" />
            </div>
        </div>
    )
};
```

### Continued development

I would love to continue developing my skills in React, I still need to improve working with hooks and states, and how to handle the communication within parent-child elements.

### Useful resources

- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html) - Great resource to understand Hooks, it was very helpful to work with states and effects.
- [Web Simplified useEffect](https://www.youtube.com/watch?v=0ZJgIjIuY7U&t=1s) - This channel has an amazing list of hooks, in this case useEffect and it was very helpful to understand how useEffect works and see an example of it.

## Author

- Website - [Daniel Portillo](https://dportillo23.github.io/My-Personal-Site/)
- Frontend Mentor - [@dportillo23](https://www.frontendmentor.io/profile/dportillo23)
- GitHub- [dportillo23](https://github.com/dportillo23)