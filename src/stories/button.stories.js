import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import MyButton from '../components/buttons/VButton.vue'
debugger
storiesOf('Button', module)
  .add('default', () => ({
    components: MyButton,
    template: '<my-button >Default Button</my-button>'
  }))
