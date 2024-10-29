var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var pixelSize = 10; // Tamaño de cada "píxel" en la imagen
function loadImage(url) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.crossOrigin = "anonymous"; // Para habilitar CORS si fuera necesario
        img.src = url;
        img.onload = function () { return resolve(img); };
        img.onerror = reject;
    });
}
function pixelateImage(img, pixelSize) {
    // Ajustar el canvas al tamaño de la imagen
    canvas.width = img.width;
    canvas.height = img.height;
    // Dibujar la imagen en el canvas
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0, img.width, img.height);
    // Obtener los datos de la imagen
    var imageData = ctx === null || ctx === void 0 ? void 0 : ctx.getImageData(0, 0, img.width, img.height);
    if (imageData && ctx) {
        for (var y = 0; y < imageData.height; y += pixelSize) {
            for (var x = 0; x < imageData.width; x += pixelSize) {
                // Obtener el color promedio
                var red = imageData.data[((y * imageData.width + x) * 4)];
                var green = imageData.data[((y * imageData.width + x) * 4) + 1];
                var blue = imageData.data[((y * imageData.width + x) * 4) + 2];
                var alpha = imageData.data[((y * imageData.width + x) * 4) + 3];
                // Llenar el bloque con el color promedio
                ctx.fillStyle = "rgba(".concat(red, ",").concat(green, ",").concat(blue, ",").concat(alpha / 255, ")");
                ctx.fillRect(x, y, pixelSize, pixelSize);
            }
        }
    }
}
// Cargar y pixelar la imagen desde la ruta especificada
loadImage("link.png").then(function (img) {
    pixelateImage(img, pixelSize);
}).catch(function (error) {
    console.error("Error al cargar la imagen:", error);
});
