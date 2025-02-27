<!--

  DO NOT EDIT.

  This markdown file was autogenerated using a mixture of the following files as the source of truth for its data:
  - ../../src/rules/accessibility-valid-aria.ts
  - ../../tests/rules/accessibility-valid-aria/cases.ts

  In order to update this file, it is therefore those files which need to be updated, as well as potentially the generator script:
  - ../../../../tools/scripts/generate-rule-docs.ts

-->

<br>

# `@angular-eslint/template/accessibility-valid-aria`

Ensures that correct ARIA attributes and respective values are used

- Type: suggestion

- 💡 Provides suggestions on how to fix issues (https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions)

<br>

## Rule Options

The rule does not have any configuration options.

<br>

## Usage Examples

> The following examples are generated automatically from the actual unit tests within the plugin, so you can be assured that their behavior is accurate based on the current commit.

<br>

<details>
<summary>❌ - Toggle examples of <strong>incorrect</strong> code for this rule</summary>

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```html
<div aria-roledescriptio="text">Text</div>
     ~~~~~~~~~~~~~~~~~~~~~~~~~~
<input [aria-labelby]="label">
       ~~~~~~~~~~~~~~~~~~~~~~
<input [attr.aria-requiredIf]="required">
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```html
<div aria-expanded="notABoolean">notABoolean</div>
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~
<div aria-haspopup="notAToken">notAToken</div>
     ~~~~~~~~~~~~~~~~~~~~~~~~~
<input [attr.aria-rowcount]="{ a: 2 }">notAnInteger
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<div aria-relevant="notATokenList">notATokenList</div>
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<div aria-checked="notATristate">notATristate</div>
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~
<div role="slider" [attr.aria-valuemin]="[1, 2]">notANumber</div>
                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<input [attr.aria-placeholder]="4">notAPlaceholder
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

</details>

<br>

---

<br>

<details>
<summary>✅ - Toggle examples of <strong>correct</strong> code for this rule</summary>

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<input aria-labelledby="Text">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<div ariaselected="0"></div>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<textarea [attr.aria-readonly]="readonly"></textarea>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<button [variant]="variant">Text</button>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<div aria-expanded="true">aria-expanded</div>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<div aria-haspopup="menu">aria-haspopup</div>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<div [attr.aria-pressed]="undefined">aria-pressed</div>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<input [attr.aria-rowcount]="2">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<table aria-rowcount="-1"></table>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<div aria-relevant="additions">additions</div>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<div aria-checked="false">checked</div>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<div role="slider" [attr.aria-valuemin]="1"></div>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<div role="slider" aria-valuemin="1"></div>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<div aria-="text">Text</div>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<input
  aria-placeholder="Placeholder"
  aria-orientation="undefined"
  [attr.aria-checked]="test && isChecked"
  [attr.aria-hidden]="'abc' | appAria"
  [attr.aria-invalid]="hasError ? 'grammar' : 'spelling'"
  [attr.aria-label]="inputSchema!.label"
  [attr.aria-live]="inputSchema['live']"
  [attr.aria-required]="inputSchema?.isRequired">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<app-custom aria-x="text">Text</app-custom>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/accessibility-valid-aria": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<app-test aria-expanded="notABoolean"></app-test>
```

</details>

<br>
