import Imagery from '../components/Imagery.vue';

export default {
  title: 'Component/Imagery',
  component: Imagery,
  argTypes: {
    scale: { control: { type: 'select', options: ['16:9', '4:3', '3:2', '1:1', '2:3', '3:4', '9:16'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Imagery },
  template: '<div><imagery v-bind="$props"></imagery><imagery v-bind="$props"></imagery><imagery v-bind="$props"></imagery><imagery v-bind="$props"></imagery></div>',
});

export const Example = Template.bind({});
Example.args = {
  src: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640',
  srcset: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640 640w, https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=1024 1024w',
  width: 640,
  height: 427,
  scale: '16:9',
  lazy: false
};