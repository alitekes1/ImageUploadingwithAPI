﻿var imagelinkAlert = $("#imageLink");
var uploadedImage = $("#uploadedImage");
let image1 = document.getElementById("image1");
let link;
function fileChange() {
    var file = document.getElementById('input_img');
    var form = new FormData();
    form.append("image", file.files[0])

    var imgBBKey = "723e033469614c94a5507eeb3ce49788";
    // 1-You have to register to https://tr.imgbb.com/
    // 2-Entire https://api.imgbb.com/  and copy the API key.
    // 3-Paste to imggBbKey;

    var settings = {
        "url": "https://api.imgbb.com/1/upload?key=" + imgBBKey,
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        var jx = JSON.parse(response);
        console.log(jx.data.url);
        link = jx.data.url;
        imagelinkAlert.html("Image uploading is success. <br /> Your Image Link: <a href=" + link + ">" + link + "</a> <br /> You can use that want to everywhere :) ");

        imagelinkAlert.removeClass("visually-hidden");
        uploadedImage.removeClass("visually-hidden");
        image1.src = link;
    });
}
