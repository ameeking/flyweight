import Chip from '../components/Chip.vue';

export default {
  title: 'Component/Chip',
  component: Chip,
  argTypes: {
    type: { control: { type: 'select', options: [null, 'primary', 'secondary'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Chip },
  template: '<chip :href="href" :type="type" @onClose="onClose">{{ label }}</chip>',
});

export const Example = Template.bind({});
Example.args = {
  label: "I'm a chip",
};

export const Default = Template.bind({});
Default.args = {
  label: "Default chip",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary chip",
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary chip",
  type: 'secondary'
};
