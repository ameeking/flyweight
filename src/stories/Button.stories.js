import MyButton from '../components/Button.vue';

export default {
  title: 'Component/Button',
  component: MyButton,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props">{{ label }}</my-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "I'm a button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "I'm a button",
};
