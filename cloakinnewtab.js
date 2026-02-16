(function () {
    var url = "https://blobby-boi.github.io/BlobeBM/main.html";

    // Clear the current document
    document.documentElement.innerHTML = "";

    // Set the icon
    document.head.innerHTML += '<link rel="icon" href="lexialogo.png" type="image/png">';

    // Set the title
    document.head.innerHTML += '<title>Home - PowerUp</title>';

    // Create an iframe
    var iframe = document.createElement('iframe');

    // Style the iframe
    iframe.style = "position:fixed;width:100vw;height:100vh;top:0;left:0;right:0;bottom:0;z-index:2147483647;background-color:white;border:none;";

    // Assign URL
    if (url.startsWith("https://") || url.startsWith("http://")) {
        iframe.src = url;
    } else {
        iframe.src = "https://" + url;
    }

    // Append iframe to the body
    document.body.appendChild(iframe);
})();
