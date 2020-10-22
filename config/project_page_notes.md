# Formatting

### Lines
* Lines start at first element and are separated by 'newline' type elements
* Can have multiple elements on the same line

### Width
* Width is in units of % of parent div
* If the sum of widths in a row is less than 100, elements are aligned center by default
* If the sum of widths in a row is greater than 100 (including padding + margins), return an error
* Default margins and padding are not factored in to percentage so take that into account!

### Custom style
* Add custom style to your elements
* For images in a gallery, this doesn't work


# Content types

Each content element has a type. (REQUIRED)

### All types of content (except newline) take fields:
* row
* width
* custom_style (optional)

## Type options

### Newline
Starts a new line

### Spacer
A simple div for formatting purposes

### Image
Clickable image
On click: gallery modal, show caption

Required fields:
* caption
* img_fname
* img_alt
* img_category

If a row contains more than one image AND NO OTHER CONTENT TYPES, the row becomes a two-column gallery view. Meaning, you can put many images on the same row and it will display as only two images per line. In this case, width is ignored.

### Text
Header and/or paragraph

Required fields:
* title AND/OR
* caption

### Video
Embedded video from youtube or vimeo, with title and description

Required fields:
* title
* caption
* vid_site
* vid_id

### Kuula
Embeddable interactive panorama from kuula.com

Required fields:
* embed_src