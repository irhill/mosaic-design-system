---
title: Chip
navigation: button
chips:
  - HTML/CSS
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-chip--as-default
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


    Below, you can find a live demo for a Chip component. Use the drop-down menus and radio buttons to view the different Chip Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: <span class="mcc-chip">Chip</span>
        name: Chip
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--primary
                name: Primary
              - value: mcc-chip--secondary
                name: Secondary
              - value: mcc-chip--success
                name: Success
              - value: mcc-chip--danger
                name: Danger
              - value: mcc-chip--warning
                name: Warning
              - value: mcc-chip--info
                name: Info
        attributes: []
      - template:
          lang: html
          code: |-
            <span class="mcc-chip">
              <mcc-icon name="does-not-exist"></mcc-icon>
              <span>Chip</span>
            </span>
        name: Chip with icon
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - name: Primary
                value: mcc-chip--primary
              - value: mcc-chip--secondary
                name: Secondary
              - value: mcc-chip--success
                name: Success
              - value: mcc-chip--danger
                name: Danger
              - value: mcc-chip--warning
                name: Warning
              - value: mcc-chip--info
                name: Info
        attributes: []
      - template:
          lang: html
          code: |-
            <span class="mcc-chip mcc-chip--primary">
              <span>Chip</span>
              <mcc-icon name="does-not-exist"></mcc-icon>
            </span>
        name: Chip with trailing icon
        modifiers:
          - name: Colours
            selector: .mcc-chip
            classes:
              - value: mcc-chip--primary
                name: Primary
              - value: mcc-chip--secondary
                name: Secondary
              - value: mcc-chip--success
                name: Success
              - value: mcc-chip--danger
                name: Danger
              - value: mcc-chip--warning
                name: Warning
              - value: mcc-chip--info
                name: Info
        attributes: []
---
