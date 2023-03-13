# How to use DBTag

How to get framework specific features (e.g. ng-model and v-model) to work with DBTag element.

## Angular

Third party controls require a ControlValueAccessor to function with angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
[Further information](https://stackoverflow.com/a/46465959)

```ts
<DBTag ngDefaultControl [(ngModel)]="value"></DBTag>
```

## React

TODO

## Vue

To get DBTag work with `v-model` you have to use `v-model` argument syntax:

```ts
<DBTag editlabel="Edit label" v-model:value="vModelTest"></DBTag>
```

or using on-change listener:

```ts
<DBTag editlabel="Edit label" :value="modelAndChange" :on-change="($event) => { modelAndChange = $event.target.value;
}"/> {{ modelAndChange }}
```
