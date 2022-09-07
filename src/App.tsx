import { defineComponent, ref } from 'vue'
import { RouterView } from 'vue-router'
export default defineComponent({
  setup() {
    return () => <>
      <header>123</header>
      <ul>
        <li>
          <router-link to="/">Ho1me</router-link>
        </li>
      </ul>
      <div>
        <RouterView></RouterView>
      </div>
      </>
  }
})