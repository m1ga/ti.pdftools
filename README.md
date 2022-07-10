# Ti.PDFTools

Titanium module for using PdfBox on Android using <a href="https://github.com/TomRoush/PdfBox-Android">https://github.com/TomRoush/PdfBox-Android</a>


## Installation

```
<modules>
    <module>ti.pdftools</module>
</modules>
```

## Usage

```javascript
var pdftools = require('ti.pdftools');

// files
var f1 = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "1.pdf");
var f2 = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "2.pdf");

var file = pdftools.merge([
	f1, f2
]);

/*
var f1 = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "image1.jpg");
var f2 = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "image2.png");

var file = pdftools.imagesToPdf([
	f1, f2
]);
*/

// open merged PDF file
var intent = Ti.Android.createIntent({
    action: Ti.Android.ACTION_VIEW,
    type: "application/pdf",
    data: file.nativePath
});
var open = Ti.Android.createIntentChooser(intent, "open pdf");
Ti.Android.currentActivity.startActivity(open);
```

#### create a new PDF

```js
var pdfFile = pdftools.createPDF([{
		text: "Hello",
		x: 10,
		y: 10,
		fontSize: 20
	},
	{
		text: "Titanium",
		x: 10,
		y: 30,
		fontSize: 30
	}
]);
```

## Methods

<table>
    <thead>
    <tr>
        <th>method</th>
        <th>description</th>
        <th>parameter</th>
        <th>return</th>
    </tr>
</thead>
<tr>
    <td>merge</td>
    <td>will merge multiple PDF into one</td>
    <td>Array of PDF files</td>
    <td>null or TiBlob</td>
</tr>
<tr>
    <td>imagesToPdf</td>
    <td>will merge multiple images into a PDF</td>
    <td>Array of image files</td>
    <td>null or TiBlob</td>
</tr>
<tr>
    <td>createPDF</td>
    <td>will create a new PDF</td>
    <td>Array of text objects: text, x, y, fontSize</td>
    <td>null or TiBlob</td>
</tr>
</table>




## Author

* Michael Gangolf (<a href="https://github.com/m1ga">@MichaelGangolf</a> / <a href="https://www.migaweb.de">Web</a>)
