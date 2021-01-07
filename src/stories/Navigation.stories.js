import Navigation from '../components/Navigation.vue';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Navigation },
  template: '<navigation :items="items" :inverse="inverse" />',
});

export const Example = Template.bind({});
Example.args = {
  items: [
    {
      'id': 1,
      'name': 'Item one',
      'path': '/'
    },
    {
      'id': 2,
      'name': 'Item two',
      'path': '/'
    },
    {
      'id': 3,
      'name': 'Item three',
      'path': '/'
    },
    {
      'id': 4,
      'name': 'Item four',
      'path': '/'
    },
  ],
  inverse: false
};

export const Inverse = Template.bind({});

Inverse.parameters = {
  backgrounds: { default: 'dark' },
};

Inverse.args = {
  items: [
    {
      'id': 1,
      'name': 'Item one',
      'path': '/'
    },
    {
      'id': 2,
      'name': 'Item two',
      'path': '/'
    },
    {
      'id': 3,
      'name': 'Item three',
      'path': '/'
    },
    {
      'id': 4,
      'name': 'Item four',
      'path': '/'
    },
  ],
  inverse: true
};
