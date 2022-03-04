---
title: Radio
chips:
  - HTML/CSS
storybook: https://tessera.oneadvanced.io/dev/components-forms/?path=/docs/html-input-radio--default-story
tabs:
  - title: Usage
    body: ""
    icon: file_invoice
  - title: Code
    hook: code
    icon: source_code
  - title: Accessibility
    body: ""
    icon: web_accessibility_1
code:
  example:
  body: >-
    ### Live demo

    Below, you can find a live demo for an Radio component. Use the drop-down menus and radio buttons to view the different Radio Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <label class="mfc-label">Radio input</label>
            <div class="mfc-radio-wrapper">
              <input id="radioInput1" name="radioInput1" type="radio" checked>
              <label for="radioInput1">Radio input</label>
              <div class="mfc-help-text">Radio input help text</div>
            </div>
        name: As default
        modifiers:
          - name: Disabled
            selector: input
            type: attribute
            attribute:
              name: disabled
          - name: Checked
            selector: input
            type: attribute
            attribute:
              name: checked
      - template:
          lang: html
          code: >-
            <label class="mfc-label">Radio input</label>
            <div class="mfc-radio-button-wrapper" style="max-width: 280px; width: 100%">
              <input id="radioInput18" name="radioInput18" type="radio">
              <label for="radioInput18">
                <span>Radio input</span>
                <span>Subtitle</span>
              </label>
              <div class="mfc-help-text">Radio input help text</div>
            </div>
        name: As choice button
        modifiers:
          - name: Disabled
            selector: input
            type: attribute
            attribute:
              name: disabled
          - name: Checked
            selector: input
            type: attribute
            attribute:
              name: checked
---
