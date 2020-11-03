import Card from '../components/Card.vue';

export default {
  title: 'Component/Card',
  component: Card,
  argTypes: {
    header: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    footer: { control: { type: 'text' } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<card :image="image"><template slot="header">{{ header }}</template><template slot="content">{{ content }}</template><template slot="footer">{{ footer }}</template></card>',
});

export const Primary = Template.bind({});
Primary.args = {
  image: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=320',
  header: 'This is the header',
  content: 'This is the content',
  footer: 'This is the footer',
};
