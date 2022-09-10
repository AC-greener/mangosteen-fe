import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Foo },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '1', component: First, },
      { path: '2', component: Second, },
    ]
  }
]