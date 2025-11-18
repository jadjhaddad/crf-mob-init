/**
 * Font family constants for Karla font
 *
 * Usage in React Native:
 * <Text style={{ fontFamily: Fonts.Regular }}>Regular text</Text>
 * <Text style={{ fontFamily: Fonts.Bold }}>Bold text</Text>
 *
 * Usage with Tailwind (requires tailwind.config.js setup):
 * <Text className="font-regular">Regular text</Text>
 * <Text className="font-bold">Bold text</Text>
 */

export const Fonts = {
  Regular: 'Karla-Regular',
  Medium: 'Karla-Medium',
  SemiBold: 'Karla-SemiBold',
  Bold: 'Karla-Bold',
  Light: 'Karla-Light',
  Italic: 'Karla-Italic',
} as const;

export type FontFamily = typeof Fonts[keyof typeof Fonts];

export default Fonts;
