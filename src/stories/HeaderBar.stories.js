import HeaderBar from '../components/HeaderBar.vue';
import MyButton from '../components/Button.vue';

export default {
  title: 'Component/HeaderBar',
  component: HeaderBar,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderBar, MyButton },
  template: '<header-bar :menuItems="items" :inverse="inverse"><template slot="logo">LOGO</template><template slot="utilities"><my-button>Test</my-button></template></header-bar>',
});

export const Example = Template.bind({});
Example.args = {
  items: [
    {
      'id': 1,
      'name': 'Item one',
      'path': '/'
    },
    {
      'id': 2,
      'name': 'Item two',
      'path': '/'
    },
    {
      'id': 3,
      'name': 'Item three',
      'path': '/'
    },
    {
      'id': 4,
      'name': 'Item four',
      'path': '/'
    },
  ],
  inverse: false
};

export const Inverse = Template.bind({});

Inverse.parameters = {
  backgrounds: { default: 'dark' },
};

Inverse.args = {
  items: [
    {
      'id': 1,
      'name': 'Item one',
      'path': '/'
    },
    {
      'id': 2,
      'name': 'Item two',
      'path': '/'
    },
    {
      'id': 3,
      'name': 'Item three',
      'path': '/'
    },
    {
      'id': 4,
      'name': 'Item four',
      'path': '/'
    },
  ],
  inverse: true
};
