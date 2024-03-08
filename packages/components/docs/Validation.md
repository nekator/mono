# Validation

-   The form components `checkbox`, `radio`, `input`, `textarea` & `select` have some sort of "auto-validation"
-   `checkbox` & `radio` do have a color change if you use the `required` attribute. If you use [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation) they will be highlighted directly
-   If you use `required` on `input`, `textarea` or `select` you will see invalid/valid states only on submitting or `onchange`

> **Note:** When you use some validation like `required` for `input`, `textarea` or `select` you need to provide a `invalidMessage` and a `validMessage`. Otherwise, you will see a TODO message to inform you that an additional property should be provided.

## Valid/Invalid Messages

### One component

If you use some framework you can pass the props `invalidMessage` and `validMessage` to the component.

### All components/ Group of components

You can set default messages to all components or a group of components.

For example to set default messages you would use:

```css
:root {
	--db-default-valid-message: "This is valid.";
	--db-default-invalid-message: "This is invalid!";
}
```

You can also set messages to a group of form-components, for example:

```css
:root {
	--db-textarea-valid-message: "Great!";
	--db-textarea-invalid-message: "Please write your text!";
}
```

For `input` you can also specify the [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types), for example:

```css
/* replace email by the type you want to change*/
:root {
	--db-input-email-valid-message: "Valid E-Mail.";
	--db-input-email-invalid-message: "You didn't provide a valid E-Mail";
}
```

> **Note:** If you use some translation tool you can set the css-properties via JavaScript on you `html` or `body` to make sure every form-component uses the correct validation message. You can overwrite the default messages by `invalidMessage` or `validMessage` anytime.
