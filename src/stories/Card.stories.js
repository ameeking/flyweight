import Card from '../components/Card.vue';

export default {
  title: 'Component/Card',
  component: Card,
  argTypes: {
    type: { control: { type: 'select', options: [null, 'left', 'right'] } },
    scale: { control: { type: 'select', options: ['16:9', '4:3', '3:2', '1:1', '2:3', '3:4', '9:16'] } },
    href: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    border: { control: { type: 'boolean' } }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<card :type="type" :image="image" :href="href" :border="border" :scale="scale"><template slot="image">{{ imageContent }}</template><template slot="content">{{ content }}</template></card>',
});

export const Example = Template.bind({});
Example.args = {
  image: {
    src: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640',
    srcset: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640 640w, https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=1024 1024w'
  },
  content: 'This is the content',
  imageContent: 'This is the image content',
};

export const CardTop = Template.bind({});
CardTop.args = {
  image: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640',
  content: 'This is the content',
};

export const CardLeft = Template.bind({});
CardLeft.args = {
  image: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640',
  content: 'This is the content',
  type: 'left',
};

export const CardRight = Template.bind({});
CardRight.args = {
  image: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640',
  content: 'This is the content',
  type: 'right',
};

export const CardBorder = Template.bind({});
CardBorder.args = {
  image: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640',
  content: 'This is the content',
  type: 'left',
  border: true
};