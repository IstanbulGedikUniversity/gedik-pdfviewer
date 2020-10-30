$('.viewPdf').each(function () {
    let file = $(this).data('pdf');
    let t = $(this);
    let height = window.innerHeight - 200 + "px";
    let options = {
        height: height,
        pdfOpenParams: {view: 'FitV'},
        fallbackLink: '<iframe src="https://file.gedik.com.tr/pdfview/viewer.html?file=' + file + '#navpanes=0&toolbar=0&statusbar=0&pagemode=thumbs&view=FitV"' +
            'style="width:100%; height:' + height + ';" frameborder="0"></iframe><br />' +
            '<a class="btn btn-primary pull-right" href="'+file+'" download><i class="fa fa-download"></i></a>'
    };
    PDFObject.embed(file, t, options);
});
