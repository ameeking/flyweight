import 'normalize.css/normalize.css';
import '!style-loader!css-loader!sass-loader!../src/scss/main.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'neutral',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'neutral',
        value: '#efefef',
      },
      {
        name: 'dark',
        value: '#505050',
      },
    ],
  },
}