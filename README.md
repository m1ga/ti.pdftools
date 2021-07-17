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

// open merged PDF file
var intent = Ti.Android.createIntent({
    action: Ti.Android.ACTION_VIEW,
    type: "application/pdf",
    data: file.nativePath
});
var open = Ti.Android.createIntentChooser(intent, "open pdf");
Ti.Android.currentActivity.startActivity(open);
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
</table>



## Author

* Michael Gangolf (<a href="https://github.com/m1ga">@MichaelGangolf</a> / <a href="https://www.migaweb.de">Web</a>)
