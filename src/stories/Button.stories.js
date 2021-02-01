import MyButton from '../components/Button.vue';

export default {
  title: 'Component/Button',
  component: MyButton,
  argTypes: {
    type: { control: { type: 'select', options: [null, 'inverse', 'primary', 'secondary'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props">{{ label }}</my-button>',
});

export const Example = Template.bind({});
Example.args = {
  label: "I'm a button",
};

export const Default = Template.bind({});
Default.args = {
  label: "Default button",
};

export const Inverse = Template.bind({});
Inverse.args = {
  label: "Inverse button",
  type: 'inverse',
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary button",
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary button",
  type: 'secondary'
};
