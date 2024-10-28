const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const pixelSize = 10; // Tamaño de cada "píxel" en la imagen

function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous"; // Para habilitar CORS si fuera necesario
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
}

function pixelateImage(img: HTMLImageElement, pixelSize: number) {
    // Ajustar el canvas al tamaño de la imagen
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Dibujar la imagen en el canvas
    ctx?.drawImage(img, 0, 0, img.width, img.height);

    // Obtener los datos de la imagen
    const imageData = ctx?.getImageData(0, 0, img.width, img.height);

    if (imageData && ctx) {
        for (let y = 0; y < imageData.height; y += pixelSize) {
            for (let x = 0; x < imageData.width; x += pixelSize) {
                // Obtener el color promedio del bloque
                const red = imageData.data[((y * imageData.width + x) * 4)];
                const green = imageData.data[((y * imageData.width + x) * 4) + 1];
                const blue = imageData.data[((y * imageData.width + x) * 4) + 2];
                const alpha = imageData.data[((y * imageData.width + x) * 4) + 3];
                
                // Llenar el bloque con el color promedio
                ctx.fillStyle = `rgba(${red},${green},${blue},${alpha / 255})`;
                ctx.fillRect(x, y, pixelSize, pixelSize);
            }
        }
    }
}

// Cargar y pixelar la imagen desde la ruta especificada
loadImage("link.png").then((img) => {
    pixelateImage(img, pixelSize);
}).catch((error) => {
    console.error("Error al cargar la imagen:", error);
});
