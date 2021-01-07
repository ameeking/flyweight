import Grid from '../components/Grid.vue';
import GridCol from '../components/GridCol.vue';

export default {
  title: 'Component/Grid',
  component: Grid
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Grid, GridCol },
  template: '<grid><grid-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl">Col 1</grid-col><grid-col>Col 2</grid-col><grid-col>Col 3</grid-col><grid-col>Col 4</grid-col><grid-col>Col 5</grid-col><grid-col>Col 6</grid-col><grid-col>Col 7</grid-col><grid-col>Col 8</grid-col><grid-col>Col 9</grid-col><grid-col>Col 10</grid-col><grid-col>Col 11</grid-col><grid-col>Col 12</grid-col></grid>',
});

export const Example = Template.bind({});
Example.args = {
  xs: "1",
  sm: "1",
  md: "1",
  lg: "1",
  xl: "1",
};
