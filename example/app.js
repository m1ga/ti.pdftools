//
// TODO: place two PDF files into /app/assets/ name 1.pdf and 2.pdf
//

var pdftools = require('ti.pdftools');

var win = Ti.UI.createWindow({
	backgroundColor: '#fff'
});
var lbl = Ti.UI.createLabel({
	text: "",
	color: "#000"
})
win.add(lbl);

win.addEventListener("open", function() {

	var f1 = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "1.pdf");
	var f2 = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "2.pdf");

	console.log("File exists: " + f1.exists());
	console.log("File exists: " + f2.exists());

	var file = pdftools.merge([
		f1, f2
	]);

	if (file != null) {
		lbl.text = "merged file size: " + file.size;

		var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_VIEW,
			type: "application/pdf",
			data: file.nativePath
		});
		var open = Ti.Android.createIntentChooser(intent, "open pdf");
		Ti.Android.currentActivity.startActivity(open);
	}
})
win.open();
