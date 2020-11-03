import Chip from '../components/Chip.vue';

export default {
  title: 'Component/Chip',
  component: Chip,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Chip },
  template: '<chip @onClick="onClick" v-bind="$props">{{ label }}</chip>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Chip',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Chip',
};
