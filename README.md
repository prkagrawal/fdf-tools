# fdf-tools

A tiny package to create fdf (Forms data format) files.

## Install

```
npm i fdf-tools
```

## Usage
1. You need a fillable pdf.

2. Get field names of the pdf form
```bash
pdftk [pdf_name] dump_data_fields
```

3. Create fdf file using this package, let's assume your pdf form has fields "Name", "Address" and "Age":
```typescript
import { createFdf } from 'fdf-tools';
import fs from 'fs';

const formData = {
  Name: "John Doe",
  Address: "132, My Street, Kingston, New York 12401.",
  Age: "25",
};

const fdfData = createFdf(formData);

// Save the FDF data to a file
fs.writeFileSync("form_data.fdf", fdfData);
console.log("FDF file created successfully.");
```

4. Then this fdf can be used to auto-fill the pdf form using `pdftk`
```bash
pdftk pdf_form.pdf fill_form form_data.fdf output resulting_pdf.pdf flatten
```
the end result form will be in resulting_pdf.pdf which is filled out and flattened (no longer editable)
