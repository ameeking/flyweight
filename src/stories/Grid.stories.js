import Grid from '../components/Grid.vue';
import GridCol from '../components/GridCol.vue';

export default {
  title: 'Component/Grid',
  component: Grid
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Grid, GridCol },
  template: '<grid><grid-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl">1</grid-col><grid-col>2</grid-col><grid-col>3</grid-col><grid-col>4</grid-col><grid-col>5</grid-col></grid>',
});

export const Primary = Template.bind({});
Primary.args = {
  xs: "1",
  sm: "1",
  md: "1",
  lg: "1",
  xl: "1",
};
