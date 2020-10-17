# Formatting

### Row
* Assign each content element a row number, starting at 1
* Can put multiple elements in a row, elements will be formatted left to right in order of csv lines

### Width
* Width is in units of % of parent div
* If the sum of widths in a row is less than 100, elements are aligned center by default
* If the sum of widths in a row is greater than 100 (including padding + margins), return an error
* Default margins and padding are not factored in to percentage so take that into account!

### Custom style
* A dictionary with keys = properties, values = assignments
* Not sure how this is gonna work yet


# Content types

### All types of content take fields:
* type
* row
* width
* custom_style (optional)

## Type options

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

If a row contains more than one image, the row becomes a two-column gallery view. Meaning, you can put many images on the same row and it will display as only two images per line.

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
