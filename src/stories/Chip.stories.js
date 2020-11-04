import Chip from '../components/Chip.vue';

export default {
  title: 'Component/Chip',
  component: Chip
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Chip },
  template: '<chip :href="href" @onClose="onClose">{{ label }}</chip>',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "I'm a chip",
};
