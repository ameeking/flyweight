import Header from '../components/Header.vue';

export default {
  title: 'Component/Header',
  component: Header,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: '<header :menuItems="items" :inverse="inverse" />',
});

export const Primary = Template.bind({});
Primary.args = {
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

export const Secondary = Template.bind({});
Secondary.args = {
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
