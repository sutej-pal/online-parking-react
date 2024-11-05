const adjustColorShade = (color: string, amount: number) =>
  `#${color.replace(/^#/, "").replace(/../g, (color) =>
    Math.min(255, Math.max(0, parseInt(color, 16) + amount))
      .toString(16)
      .padStart(2, "0")
  )}`;
  
const utils = {
  adjustColorShade,
};

export default utils;
