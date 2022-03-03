---
title: Avatar
chips:
  - HTML/CSS
storybook-url: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-button--as-default
storybook: https://tessera.oneadvanced.io/dev/components-core/?path=/docs/html-avatar--as-default
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


    Below, you can find a live demo for an Avatar component. Use the drop-down menus and radio buttons to view the different Button Types and Variants.
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <div class="mcc-avatar">
              <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="John Doe">
            </div>
        name: Avatar
        modifiers:
          - name: Size
            selector: .mcc-avatar
            classes:
              - name: Small
                value: mcc-avatar--sm
              - name: Medium
                value: mcc-avatar
              - name: Large
                value: mcc-avatar--lg
              - name: Extra large
                value: mcc-avatar--xl
              - name: Extra extra large
                value: mcc-avatar--xxl
        attributes: []
      - template:
          lang: html
          code: <div class="mcc-avatar">XX</div>
        name: With initials
        modifiers:
          - name: Size
            selector: .mcc-avatar
            classes:
              - name: Small
                value: mcc-avatar--sm
              - name: Medium
                value: mcc-avatar
              - name: Large
                value: mcc-avatar--lg
              - name: Extra large
                value: mcc-avatar--xl
              - name: Extra extra large
                value: mcc-avatar--xxl
        attributes: []
      - template:
          lang: html
          code: >-
            <div class="mcc-avatar">
              <mcc-icon name="user" icon-set="fluency-outline" aria-hidden="true"></mcc-icon>
            </div>
        name: As icon
        modifiers:
          - name: Size
            selector: .mcc-avatar
            classes:
              - name: Small
                value: mcc-avatar--sm
              - value: mcc-avatar
                name: Medium
              - name: Large
                value: mcc-avatar--lg
              - name: Extra large
                value: mcc-avatar--xl
              - name: Extra extra large
                value: mcc-avatar--xxl
        attributes: []
---
