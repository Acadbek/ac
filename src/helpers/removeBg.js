export async function removeBackground(img) {
  // let images = document.getElementById("urls").value.split("\n");

  // import img from ''

  // img.forEach((imageUrl) => {
  const image = new Image();
  image.onload = ({ target }) => {
    const w = Math.round(target.width);
    const h = Math.round(target.height);

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(
      target,
      0,
      0,
      target.width,
      target.height,
      0,
      0,
      w,
      h
    );

    const canvasImageData = canvasContext.getImageData(0, 0, w, h);
    .log(canvasImageData);

    for (
      let index = 0, dataLength = canvasImageData.data.length;
      index < dataLength;
      index += 4
    ) {
      const r = canvasImageData.data[index];
      const g = canvasImageData.data[index + 1];
      const b = canvasImageData.data[index + 2];
      if ([r, g, b].every((item) => item > 220))
        canvasImageData.data[index + 3] = 0;
    }

    target.width = w;
    target.height = h;
    canvasContext.putImageData(canvasImageData, 0, 0);
    document.body.append(image, canvas);
  };
  image.crossOrigin = "";
  image.src = await img;
  // console.log(img);
  // });
}

export default removeBackground;
