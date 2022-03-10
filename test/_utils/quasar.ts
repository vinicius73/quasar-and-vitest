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