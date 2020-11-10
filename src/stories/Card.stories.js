import Card from '../components/Card.vue';

export default {
  title: 'Component/Card',
  component: Card,
  argTypes: {
    type: { control: { type: 'select', options: [null, 'left', 'right'] } },
    scale: { control: { type: 'select', options: ['16:9', '4:3', '3:2', '1:1', '2:3', '3:4', '9:16'] } },
    href: { control: { type: 'text' } },
    content: { control: { type: 'text' } }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<card :type="type" :image="image" :href="href" :border="border" :scale="scale"><template slot="content">{{ content }}</template></card>',
});

export const Primary = Template.bind({});
Primary.args = {
  image: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640',
  content: 'This is the content',
  border: false,
};
