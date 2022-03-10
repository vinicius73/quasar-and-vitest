# Vue 3 + Typescript + Vite + Quasar + Vitest

A simple example about how to use Vitest and Quasar

## Requirements

- [Node >= v16](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)

## Good to know

This project is buid on top of

- [Vue.js v3](https://vuejs.org/)
- [Quasar v3](https://quasar.dev/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Vue Test Utils](https://test-utils.vuejs.org/guide/)

## Setup

```
yarn install
yarn build

yarn dev
yarn test
yarn test --run
```

## How it works

In [`test/setup.ts`](test/setup.ts) is where Quasar is registered [in test utils](https://test-utils.vuejs.org/api/#global).

```ts
import { config } from "@vue/test-utils";
import { Quasar } from "quasar";

config.global.plugins.push([Quasar, {}]);
```

> TODO: move production quasar and test quasar to the same file

In [test/_utils/quasar.ts](test/_utils/quasar.ts) there is a function to wrarp quasar components.

```ts
import { defineComponent, h, normalizeProps } from "vue";
import { mount } from "@vue/test-utils";
import { QLayout } from "quasar";

const buildWithLayout = (original) => {
  return defineComponent({
    inheritAttrs: false,
    setup(_props, ctx) {
      return () =>
        h(QLayout, null, () => [h(original, normalizeProps(ctx.attrs))]);
    },
  });
};

const mountQuasar: typeof mount = (original, ...options) => {
  return mount(buildWithLayout(original), ...options);
};

export {
  mountQuasar
}
```

> TODO: turn it more future proof

There is a [alias](tsconfig.json) to root of the project, called `:`.
So we can just import the file from any component or script.

```ts
import { mountQuasar } from ":/test/_utils";

import { test, expect } from 'vitest'

// -- omit ---

const wrapper = mountQuasar(COMPONENT);

const inner = wrapper.findComponent(BtnCounter);
```

See [`BtnCounter.test.ts`](src/components/BtnCounter.test.ts) for a full example.