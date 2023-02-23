# How to use DBCheckbox

How to get framework specific features (e.g. `ng-model` and `v-model`) to work with DBCheckbox element.

## Angular

Third party controls require a ControlValueAccessor to function with angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
[Further information](https://stackoverflow.com/a/46465959)

```ts
<DBCheckbox ngDefaultControl [(ngModel)]="value"></DBCheckbox>
```

## React

TODO

## Vue

To get DBCheckbox work with `v-model` you have to use v-model argument syntax:

```ts
<DBCheckbox label="Textlabel" v-model:value="vModelTest"></DBCheckbox>
```

or using on-change listener:

```ts
<DBCheckbox label="Textlabel" :value="modelAndChange" :on-change="($event) => { modelAndChange = $event.target.value;
}"/> {{ modelAndChange }}
```
