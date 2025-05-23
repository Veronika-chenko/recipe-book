export const Sizes = Object.freeze({
  mobile: 420,
  tablet: 768,
  desktop: 1280,
  desktopLarge: 1920,
});

export const devices = {
  mobile: `@media (min-width: ${Sizes.mobile}px)`,
  tablet: `@media (min-width: ${Sizes.tablet}px)`,
  desktop: `@media (min-width: ${Sizes.desktop}px)`,
};
