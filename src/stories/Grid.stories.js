import Grid from '../components/Grid.vue';
import GridCol from '../components/GridCol.vue';

export default {
  title: 'Component/Grid',
  component: Grid
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Grid, GridCol },
  template: '<grid><grid-col>Awesome</grid-col><grid-col>Awesome</grid-col><grid-col>Awesome</grid-col><grid-col>Awesome</grid-col><grid-col>Awesome</grid-col></grid>',
});

export const Primary = Template.bind({});
