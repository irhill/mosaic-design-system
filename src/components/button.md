---
title: Button
navigation: button
tabs:
  - title: Usage
    body: >-
      ## When and why


      Buttons should be used for all **Calls To Action (CTA)** on a page, form or card. Buttons are used for this as they are the most recognised way to make something happen.


      - - -


      ## Golden rules


      There are many ways to implement buttons in a product and there are many views to support each of these.  After extensive research we have agreed on what we believe to be the best implementation of your CTA's.  These guidelines will give you an understanding of what our best practice is and why.


      * Positive buttons are ***always*** furthest to the right - save or next for example, negative buttons on the left - delete being the most negative.  We follow this method as it gives users a positive feeling of 'moving forward' when using a positive button and a negative feeling of 'moving backward' when using a negative action.


      Like this (positive on the right):


      Delete Cancel Save


      Not like this (positive on the left):


      Save Delete Cancel


      * Buttons always have a label that is specific to it's action so that the user knows what will happen when they click it.  OK should be avoided as it is too generic. Always try to give more meaning to your actions:


      Like this (buttons with meaning):


      Cancel Confirm Changes


      Not like this (buttons without meaning):


      Cancel Ok


      * Buttons always have a text label.  We cannot assume our users will understand all the different icons we use.  This is also particularly important for accessibility so that we can give a text alternative to icons.  There may be instances where space is limited (such as on mobile), if that is the case please get in touch with the Mosaic team who can offer some additional guidance.  We have very special use-cases where icon only buttons can be implemented but this should only be done with guidance from the team.

      * Icons can be used to give further visual meaning to your buttons.  The default for Mosaic is that all buttons have icons.  However, this isn't always practical with space limitations or icon suitability.  We therefore give you the option to use buttons without icons.


      > It is a richer user experience to give a button with a label and no icon, than it is to give a button with an icon and no label.


      * Icons should always appear to the left of the label.  The purpose of an icon on a button is to give further meaning to the label.  The icon should describe the button label, not the other way around.  If the icon came after the label it would no longer serve any purpose.  Having icons to the left will also to make the scanning of buttons easier.  

      * Colour is a common method of giving our users further meaning to a button - green is used to give a positive meaning, red is used to give a negative or danger meaning.  It is vital to remember however that colour only gives a visual cue and cannot be relied upon for users of assistive technology such as screen readers.


      You can find details of each of our button colours and when to use them in the Usage section below.


      * Be consistent.   If you use icons on buttons in your product then make sure you use them for ALL buttons.  If you use Close for some screens and Cancel in others to perform the same action, consider which one makes most sense and stick with it.

      * Be consistent.  No that's not a typo - we say it again as it is so important for our users.  Giving inconsistent buttons can give a poor user experience and can cause some users to be confused or completely put off using the product.

      * Never have a mix of regular buttons and pill-styled buttons in the same application. Although both function in the same way, for consistency, a design decision must be made to use one or the other.


      - - -


      ## Usage


      We have many different styles and states for our buttons we thought it would be useful to give you some tips on when to use them.


      ### Lets start with button colour.


      Using the `color` attribute you can set the background colour of your button to one of the following:
  - title: Style
    body: "## this is the content from the style tab"
  - title: Code
    hook: code
  - title: Accessibility
    body: "## this is the content from the accessibility tab"
code:
  example: <button class="mcc-button">Button text</button>
  body: |-
    ## This is the code section and here's a code block

    ```html
    <button class="mcc-button">Button text</button>
    ```

    # Preview
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <span class="mcc-button__label">Button</span>
            </button>
        name: Default
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: With icon
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <span class="mcc-button__label">Button</span>
              <mcc-icon name="arrows_long_right" aria-hidden="true"></mcc-icon>
            </button>
        name: With trailing icon
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As outline
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--outline-primary
              - name: Secondary
                value: mcc-button--outline-secondary
              - name: Success
                value: mcc-button--outline-success
              - name: Danger
                value: mcc-button--outline-danger
              - name: Warning
                value: mcc-button--outline-warning
              - name: Info
                value: mcc-button--outline-info
              - name: Light
                value: mcc-button--outline-light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As text
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--text-primary
              - name: Secondary
                value: mcc-button--text-secondary
              - name: Success
                value: mcc-button--text-success
              - name: Danger
                value: mcc-button--text-danger
              - name: Warning
                value: mcc-button--text-warning
              - name: Info
                value: mcc-button--text-info
              - name: Light
                value: mcc-button--text-light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--icon-only">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As icon only
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--outline-primary
              - name: Secondary
                value: mcc-button--outline-secondary
              - name: Success
                value: mcc-button--outline-success
              - name: Danger
                value: mcc-button--outline-danger
              - name: Warning
                value: mcc-button--outline-warning
              - name: Info
                value: mcc-button--outline-info
              - name: Light
                value: mcc-button--outline-light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--icon-only">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As text and icon only
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--text-primary
              - name: Secondary
                value: mcc-button--text-secondary
              - name: Success
                value: mcc-button--text-success
              - name: Danger
                value: mcc-button--text-danger
              - name: Warning
                value: mcc-button--text-warning
              - name: Info
                value: mcc-button--text-info
              - name: Light
                value: mcc-button--text-light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
---
