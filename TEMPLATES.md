# The ElectrumAudio Templating System

## Files and Folders

In the ElectrumAudio repository, all files that are used to build the site are housed in `/apps/web/src`. This is the only folder of the repository you need to worry about for working with templates and writing content for pages.

Each page of the site that uses the template system has the following parts, both located within `apps/web/src`:

-   *Astro file*:
    
    This is located in the `products` folder, and contains the structure and styling for the page. Normally, you shouldn't have to deal with this file.

    For example, the tiberius test homepage we are creating has a file called `tiberius.astro` in the `pages` folder.

    All of the products pages are in the `products` subfolder of `pages`, for instance `pages/products/spock-transformer.astro`.

-   *templates folder*:

    This folder is located in `apps/web/src`, and it must have the same name as the Astro file. Inside this folder, we will write one or more Markdown files containing the content for the corresponding page.

    The Markdown files for the tiberius page therefore are located in `apps/web/src/tiberius`.

    When the site is built, the build script adds each Markdown file to the description area of the page in the alphabetical order it appears in the folder. It doesn't matter what the names of the files are, provided they end in the file extension `.md`, so you can name them anything you wish to ensure they are in the proper order for how you want them to appear in the final produced page.

## The Templates

When you create a Markdown file in the folder for a page, you can select from a range of layout templates for the type of content that Markdown file is handling. Every Markdown file must being with a frontmatter area, which looks like this:

```markdown
---
layout: ../templates/*template type*.astro
---
```

Replace "*template type*" with the name of the template you are using for this Markdown file's content (see the choices below). Capitalization matters!

Below the second set of `---` is the Content Area. What you write in that area differes depending on the type of template you have selected for this section.

-   *Tagline*

    This template is designed for a single-line of large text over a dark background.

    Example: the first item in the tiberius page is a Tagline. The Markdown file is simply this:

    ```markdown
    ---
    layout: ../templates/Tagline.astro
    ---
    discerning audiophile components
    ```

-   *TextBlock*

    This is the most general and openended of the templates. It's designed for larger areas of text and other content: paragraphs, lists, headers, even images. In the Content Area of a Markdown file that uses the TextBlock template, write content using Markdown syntax.

    The second area of the tiberius page featuring a paragraph, an image, a second paragraph and a list, uses the TextBlock template.

-   *Pullquote*

    This versatile template allows you to either add a short phrase or sentence, similar to Tagline but without a dark background, or to add a quote with an author attribution.

    To add the author attribution, insert an extra line in the front matter area (between the `---` lines) and write `author: ` and the author name. It will automatically be added to the quote.

    The third item in the tiberius page is a pullquote. The Markdown file looks like this:

    ```markdown
    ---
    layout: ../templates/Pullquote.astro
    author: Mr Bennet
    ---
    "For what do we live but to make sport for our neighbours, and laugh at them in our turn?"
    ```

-   *ImageBanner*

    The ImageBanner template is a more elaborate version of the Tagline template. It includes room for an image, an optional title line, and a text block (it is recommended the text block be limited to one or two paragraphs, or a paragraph and a link). This template type has slightly more specific requirements for the Markdown file.

    The outline of the ImageBanner template looks like this:

    ```markdown
    ---
    layout: ../templates/ImageBanner.astro
    position: left
    ---
    ![*image alt text here*](../assets/*image filename here*)

    ## *title here*

    <div class="banner-text">

    *text paragraph here*

    </div>
    ```
    Replace *image alt text here*, *image filename here*, *title here*, and *text paragraph here* with your own content.

-   *ImageRow*

    This template is for a row (or more) of images. In the Content Area, add one image in Markdown syntax on each *double-spaced* line.

    For example, the Markdown for the row of illustrations in the tiberius page looks like this:

    ```markdown
    ---
    layout: ../templates/ImageRow.astro
    ---
    ![A schematic of an electric component](../assets/schematics/schematic-01.svg)

    ![A schematic of an electric component](../assets/schematics/schematic-02.svg)

    ![A schematic of an electric component](../assets/schematics/schematic-03.svg)

    ![A schematic of an electric component](../assets/schematics/schematic-04.svg)

    ![A schematic of an electric component](../assets/schematics/schematic-05.svg)

    ![A schematic of an electric component](../assets/schematics/schematic-06.svg)

    ![A schematic of an electric component](../assets/schematics/schematic-07.svg)
    ```

## Images

Images for the templates always go in the `apps/web/src/assets` folder.