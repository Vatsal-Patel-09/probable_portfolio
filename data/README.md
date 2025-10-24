# Data JSON Files

This folder contains static JSON data files that replace the Directus CMS backend.

## Files Overview

### experiences.json
Contains work experience data displayed on the homepage.

**Structure:**
```json
{
  "id": number,
  "year": string,              // e.g., "2023 - Present"
  "company": string,
  "title": string,
  "description": string,
  "techStack": [               // Array of technology objects
    { "name": string }
  ],
  "status": "published" | "draft",
  "order": number              // For sorting (lower = higher priority)
}
```

### projects.json
Contains portfolio project data displayed on the homepage.

**Structure:**
```json
{
  "id": number,
  "name": string,
  "description": string,
  "tags": [                    // Array of tag objects
    { "name": string }
  ],
  "thumbnail": string,         // Filename or path to image
  "href": string,              // External link to project
  "status": "published" | "draft",
  "order": number              // For sorting (lower = higher priority)
}
```

### blogs.json
Contains blog post data for the blog section.

**Structure:**
```json
{
  "id": number,
  "Title": string,
  "slug": string,              // URL-friendly identifier
  "preview_text": string,
  "banner_image": string,      // Path to image, e.g., "/images/blog/image.jpg"
  "status": "published" | "draft",
  "date_created": string,      // ISO 8601 format
  "date_updated": string,      // ISO 8601 format
  "body": {
    "blocks": [                // Array of content blocks
      {
        "id": string,
        "type": "paragraph" | "header" | "code" | "nestedlist" | "image" | "table" | "quote" | "checklist" | "raw",
        "data": object         // Varies by block type
      }
    ]
  }
}
```

## Block Types

### Paragraph
```json
{
  "id": "unique-id",
  "type": "paragraph",
  "data": {
    "text": "HTML string with inline formatting"
  }
}
```

### Header
```json
{
  "id": "unique-id",
  "type": "header",
  "data": {
    "text": "Header text",
    "level": 1-6
  }
}
```

### Code
```json
{
  "id": "unique-id",
  "type": "code",
  "data": {
    "code": "code content",
    "language": "javascript"
  }
}
```

### Nested List
```json
{
  "id": "unique-id",
  "type": "nestedlist",
  "data": {
    "items": [
      {
        "content": "List item text",
        "items": []
      }
    ]
  }
}
```

### Image
```json
{
  "id": "unique-id",
  "type": "image",
  "data": {
    "file": {
      "url": "/path/to/image.jpg"
    },
    "caption": "Optional caption"
  }
}
```

### Quote
```json
{
  "id": "unique-id",
  "type": "quote",
  "data": {
    "text": "Quote text",
    "caption": "Optional attribution"
  }
}
```

### Checklist
```json
{
  "id": "unique-id",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Item text",
        "checked": true/false
      }
    ]
  }
}
```

### Table
```json
{
  "id": "unique-id",
  "type": "table",
  "data": {
    "content": [
      ["cell1", "cell2"],
      ["cell3", "cell4"]
    ]
  }
}
```

## Usage

To add new data:
1. Edit the appropriate JSON file
2. Follow the structure outlined above
3. Ensure all required fields are present
4. Use "published" status to make items visible
5. Set appropriate `order` values for sorting

## Important Notes

- Only items with `status: "published"` will be displayed
- Lower `order` numbers appear first (sorted descending by `-order`)
- Dates should be in ISO 8601 format: `YYYY-MM-DDTHH:mm:ss`
- Image paths should be relative to the `public` folder
- Blog slugs must be unique and URL-friendly
