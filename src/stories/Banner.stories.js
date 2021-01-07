import Banner from '../components/Banner.vue';

export default {
  title: 'Component/Banner',
  component: Banner,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Banner },
  template: '<banner :image="image">Cool</banner>',
});

export const Example = Template.bind({});
Example.args = {
  image: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640'
};