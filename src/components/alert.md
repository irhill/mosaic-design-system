---
title: Alert
navigation: button
chips:
  - HTML/CSS
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-alert--as-default
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
          code: >-
            <div class="[ mcc-alert mcc-alert--primary ] [ mu-mb-00 ]"
            role="alert">
              <mcc-icon name="ok" aria-hidden="true"></mcc-icon>
              <div class="mu-d-flex mu-flex-column">
                <div class="mu-fw-semi-bold">Information title</div>
                <p class="mu-mb-00">Information body with <a href="#" class="alert-link">an example link</a>.</p>
              </div>
            </div>
        name: Alert
        modifiers:
          - name: Colour
            selector: .mcc-alert
            classes:
              - name: Primary
                value: mcc-alert--primary
              - name: Secondary
                value: mcc-alert--secondary
              - name: Success
                value: mcc-alert--success
              - name: Warning
                value: mcc-alert--warning
              - name: Danger
                value: mcc-alert--danger
              - name: Info
                value: mcc-alert--info
        attributes: []
      - template:
          lang: html
          code: >-
            <div class="mcc-alert mcc-alert--primary-solid" role="alert">
              <mcc-icon name="ok" aria-hidden="true"></mcc-icon>
              <div class="mu-d-flex mu-flex-column">
                <div class="mu-fw-semi-bold">Information title</div>
                <p class="mu-mb-00">Information body with <a href="#" class="alert-link">an example link</a>.</p>
              </div>
            </div>
        name: With solid background
        modifiers:
          - name: Colours
            selector: .mcc-alert
            classes:
              - name: Primary
                value: mcc-alert--primary-solid
              - name: Secondary
                value: mcc-alert--secondary-solid
              - name: Success
                value: mcc-alert--success-solid
              - name: Warning
                value: mcc-alert--warning-solid
              - name: Danger
                value: mcc-alert--danger-solid
              - name: Info
                value: mcc-alert--info-solid
        attributes: []
      - template:
          lang: html
          code: >-
            <div class="mcc-alert mcc-alert--compact mcc-alert--primary-solid
            mu-mb-00" role="alert">
              <mcc-icon name="ok" aria-hidden="true"></mcc-icon>
              <div class="mu-fw-semi-bold">Information title</div>
            </div>
        name: As compact
        modifiers:
          - name: Colour
            selector: .mcc-alert
            classes:
              - name: Primary
                value: mcc-alert--primary-solid
              - name: Secondary
                value: mcc-alert--secondary-solid
              - name: Success
                value: mcc-alert--success-solid
              - name: Warning
                value: mcc-alert--warning-solid
              - name: Danger
                value: mcc-alert--danger-solid
              - value: mcc-alert--info-solid
                name: Info
        attributes: []
---