import Tile from '../components/Tile.vue';

export default {
  title: 'Component/Tile',
  component: Tile,
  argTypes: {
    type: { control: { type: 'select', options: [null, 'left', 'right'] } },
    content: { control: { type: 'text' } }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tile },
  template: '<tile :image="image">{{ content }}</tile>',
});

export const Primary = Template.bind({});
Primary.args = {
  image: 'https://media-ameeking.netlify.app/images/1.jpg?nf_resize=fit&w=640',
  content: 'This is the content'
};
