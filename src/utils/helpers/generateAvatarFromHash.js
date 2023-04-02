import tinycolor from "tinycolor2";

const generateAvatarFromName = (hash, name, size = 128) => {
  const color = tinycolor(hash);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const gradient = canvas.getContext("2d").createLinearGradient(0, 0, 0, size);

  gradient.addColorStop(0, color.lighten(15).toString());
  gradient.addColorStop(0.35, color.lighten(5).toString());
  gradient.addColorStop(0.65, color.darken(5).toString());
  gradient.addColorStop(1, color.darken(15).toString());

  canvas.getContext("2d").fillStyle = gradient;
  canvas.getContext("2d").fillRect(0, 0, size, size);
  canvas.getContext("2d").font = `${size / 2}px sans-serif`;
  canvas.getContext("2d").fillStyle = "#fff";
  canvas.getContext("2d").textAlign = "center";
  canvas.getContext("2d").textBaseline = "middle";
  canvas.getContext("2d").fillText(name[0].toUpperCase(), size / 2, size / 2);
  return canvas.toDataURL();
};

export default generateAvatarFromName;
