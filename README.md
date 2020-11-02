Quick and easy view your PDF files using dom in addition to the **PDFObject** plug-in.

*For cross platform support, if it is a browser or a phone that does not support pdf viewing, google uses embedded viewer.*

# Installation
Add package.json file:

```
"pdfobject": "^2.2.4",
"gedik-pdfviewer": "git+https://github.com/IstanbulGedikUniversity/gedik-pdfviewer.git",
```

Add webpack.mix.js file:

```
'node_modules/pdfobject/pdfobject.min.js',
'node_modules/gedik-pdfviewer/gedik.pdfviewer.js',
```

# Usage

```
<div class="viewPdf" data-pdf="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"></div>
```

# Required Packages
- [jQuery](https://github.com/jquery/jquery "jQuery")
