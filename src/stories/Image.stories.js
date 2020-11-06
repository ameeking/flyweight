import Imagery from '../components/Image.vue';

export default {
  title: 'Component/Image',
  component: Imagery,
  argTypes: {
    scale: { control: { type: 'select', options: ['16:9', '1:1', '4:3', '3:2'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Imagery },
  template: '<imagery v-bind="$props"></imagery>',
});

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640',
  width: 640,
  height: 427,
  scale: '16:9',
  lazy: false
};