import { Platform } from 'react-native';

export const BLUE = '#57b7f2';
export const MEDIUM_BLUE = '#89CDF6';
export const LIGHT_BLUE = '#eef8fe';
export const ORANGE = '#f2c36b';
export const WHITE = '#fff';

export const GREEN = '#56bfa1';
export const RED = '#f2594b';
export const PURPLE = '#b86cd9';

export const GREY3 = '#fafafa';
export const GREY5 = '#f8f8f8';
export const GREY10 = '#f0f1f2';
export const GREY20 = '#f2f2f2';
export const GREY25 = '#e5e9ec';
export const GREY30 = '#bfbfbf';
export const GREY32 = '#b1b1b1';
export const GREY40 = '#8c8c8c';
export const GREY50 = '#707070';
export const GREY80 = '#595959';
export const GREY90 = '#0d0d0d';
export const BLACK = '#000';

const REGULAR = Platform.select({
  android: { fontFamily: 'sans-serif', fontWeight: 'normal' },
  ios: { fontFamily: 'System', fontWeight: '400' },
});

const MEDIUM = Platform.select({
  android: { fontFamily: 'sans-serif-medium', fontWeight: 'normal' },
  ios: { fontFamily: 'System', fontWeight: '500' },
});

const BOLD = Platform.select({
  android: { fontFamily: 'sans-serif', fontWeight: 'bold' },
  ios: { fontFamily: 'System', fontWeight: '700' },
});

export const HEADING1 = {
  ...BOLD,
  fontSize: 36,
  color: GREY90,
};

export const HEADING2 = {
  ...BOLD,
  fontSize: 26,
  color: GREY90,
};

export const HEADING3 = {
  ...BOLD,
  fontSize: 22,
  color: GREY90,
};

export const HEADING4 = {
  ...BOLD,
  fontSize: 18,
  color: GREY90,
};

export const HEADING5 = {
  ...MEDIUM,
  fontSize: 16,
  color: GREY90,
};

export const BODY1_400 = {
  ...REGULAR,
  fontSize: 14,
  color: GREY50,
};

export const BODY1_500 = {
  ...MEDIUM,
  fontSize: 14,
  color: GREY50,
};

export const BODY1_700 = {
  ...BOLD,
  fontSize: 14,
  color: GREY50,
};

export const BODY2_400 = {
  ...REGULAR,
  fontSize: 12,
  color: GREY50,
};

export const BODY2_500 = {
  ...MEDIUM,
  fontSize: 12,
  color: GREY50,
};

export const BODY2_700 = {
  ...BOLD,
  fontSize: 12,
  color: GREY50,
};

export const BODY3_400 = {
  ...REGULAR,
  fontSize: 10,
  color: GREY50,
};

export const BODY3_500 = {
  ...MEDIUM,
  fontSize: 10,
  color: GREY50,
};

export const BODY3_700 = {
  ...BOLD,
  fontSize: 10,
  color: GREY50,
};

export const CAPTION400 = {
  ...REGULAR,
  fontSize: 10,
  color: BLUE,
};

export const CAPTION500 = {
  ...MEDIUM,
  fontSize: 10,
  color: BLUE,
};

export const CAPTION700 = {
  ...BOLD,
  fontSize: 10,
  color: BLUE,
};
