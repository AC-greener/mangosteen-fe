import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      {path: '', redirect: '/welcome/1'},
      { path: '1', component: First, },
      { path: '2', component: Second, },
    ]
  }
]