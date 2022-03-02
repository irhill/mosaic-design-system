---
title: Placeholder
navigation: button
chips:
  - HTML/CSS
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-placeholder--with-sizes-and-shapes
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
  example: <button class="mcc-button">Button text</button>
  body: >-
    ### Live demo


    Below, you can find a live demo for an Accordion component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <div class="mcc-placeholder">
              <div></div>
              <div></div>
              <div></div>
            </div>
        name: As default
        modifiers: []
        attributes: []
      - template:
          lang: html
          code: |-
            <div class="mcc-placeholder mcc-placeholder--animation">
              <div></div>
              <div></div>
              <div></div>
            </div>
        name: With Animation
        modifiers: []
        attributes: []
      - template:
          lang: html
          code: >-
            <div class="mcc-placeholder mcc-placeholder--animation">
                <section class="mu-d-flex mu-mb-05">
                    <div style="border-radius: 50%; width: 64px; height: 64px;"></div>
                    <section class="mu-flex-fill">
                      <div style="height: 24px; width: 80%;"></div>
                      <div></div>
                  </section>
                </section>
                <div style="width: 80%;"></div>
                <div></div>
            </div>
        name: With sizes and shapes
        modifiers: []
        attributes: []
---
