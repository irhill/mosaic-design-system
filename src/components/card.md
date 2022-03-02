---
title: Card
navigation: button
chips:
  - HTML/CSS
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-card--as-default
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


    Below, you can find a live demo for a Card component. Use the drop-down menus and radio buttons to view the different Card Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-card">
              <div class="mcc-card__header">
                <h2 class="mcc-card__title">Card title</h2>
                <div class="mcc-card__subtitle">Sub title</div>
              </div>
              <div class="mcc-card__body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                  lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat.
              </div>
              <div class="mcc-card__footer">
                <button class="mcc-button mcc-button--outline mcc-button--sm">
                  <mcc-icon name="does-not-exist" aria-hidden="true"></mcc-icon>
                  <span class="mcc-button__label">Button</span>
                </button>
              </div>
            </div>
        name: As default
        modifiers: []
        attributes: []
---
