# Roving tabindex -- A11ycasts #06

Repository of the example illustrated by [Rob Dodson](https://github.com/robdodson) in [this video](https://www.youtube.com/watch?v=uCIC2LNt0bk&t=6s).

Most of the code is visible from the video.

#### About the technique

In this example is illustrated how to create a custom radio-group following the dispositions of the [WAI ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#radiobutton):

>  - `Tab` and `Shift + Tab`: Move focus into and out of the radio group.   When focus moves into a radio group :
>    - If a radio button is checked, focus is set on the checked button.
>    - If none of the radio buttons are checked, focus is set on the first radio button in the group.
>  - `Space`: checks the focused radio button if it is not already checked.   
>  - `Right Arrow` and `Down Arrow`: move focus to the next radio button in the group, uncheck the previously focused button, and check the
> newly focused button. If focus is on the last button, focus moves to
> the first button.
>  - `Left Arrow` and `Up Arrow`: move focus to the previous radio button in the group, uncheck the previously focused button, and check
> the newly focused button. If focus is on the first button, focus moves
> to the last button.

#### My contributes

- The `handleclick` method, it is not shown in the video, but without it, the custom `radio-group` would be not usable by the mouse. I have set a check to allow only clicks on radio-button elements;

- To __meet missing requirements__ from dispositions, I have also disabled part of the __"setup initial state"__ (visible as comment from `line 18`) in the `radio-group.js` because it sets up the first `radio-button` as already selected and focused when the page is loaded.

  I have left the `tabIndex = 0` on the first `radio-button` to let it to be focused with `Tab` and `Shift Tab` but now, as per requirements it is possible and only if one wants to do, to select any of the buttons moving in the `radio-group` by arrow keys and selecting by `Mouse-Click`, `Space` or `Enter`;

- The CSS (partially adapted from [this repository](https://github.com/udacity/ud891/tree/gh-pages/lesson2-focus/05-radio-group) where one can find another way to face the same problem, a lesson part of the [Udacity Web Accessibility course](https://eu.udacity.com/course/web-accessibility--ud891)).

#### License:

MIT License

Copyright (c) 2019 Cristiano Zitarosa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
