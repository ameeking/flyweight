import List from '../components/List.vue';

export default {
  title: 'Component/List',
  component: List,
  argTypes: {
    type: { control: { type: 'select', options: [null, 'ordered', 'unordered'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List },
  template: '<list :items="items" :type="type" />',
});

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      'id': 1,
      'name': 'Item one',
      'children': [
        {
          'id': 2,
          'name': 'Item two'
        },
        {
          'id': 3,
          'name': 'Item three'
        },
      ]
    },
    {
      'id': 4,
      'name': 'Item two'
    },
    {
      'id': 5,
      'name': 'Item three'
    },
  ]
};
