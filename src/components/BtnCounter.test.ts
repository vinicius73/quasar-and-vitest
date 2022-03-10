import { test, expect } from 'vitest'
import { mountQuasar } from ":/test/_utils";
import BtnCounter from './BtnCounter.vue';

test("BtnCounter", async () => {
  expect(BtnCounter).toBeTruthy();

  const wrapper = mountQuasar(BtnCounter, {
    props: {
      supper: true,
    },
  });

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div class=\\"q-layout q-layout--standard\\" style=\\"min-height: 768px;\\">
      <!---->
      <!---->
      <main class=\\"q-page  q-layout-padding\\" style=\\"min-height: 768px;\\">
        <div class=\\"text-h4\\">SUPPER 2.5.5 <div class=\\"q-badge flex inline items-center no-wrap q-badge--single-line\\" style=\\"vertical-align: top;\\" role=\\"alert\\" data-test=\\"counter\\">0</div>
        </div>
        <hr class=\\"q-separator q-separator--horizontal\\" aria-orientation=\\"horizontal\\" />
        <div class=\\"q-btn-group row no-wrap q-btn-group--push inline\\"><button class=\\"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable\\" tabindex=\\"0\\" type=\\"button\\" data-test=\\"minus\\"><span class=\\"q-focus-helper\\"></span><span class=\\"q-btn__content text-center col items-center q-anchor--skip justify-center row\\">-</span></button><button class=\\"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable\\" tabindex=\\"0\\" type=\\"button\\" data-test=\\"plus\\"><span class=\\"q-focus-helper\\"></span><span class=\\"q-btn__content text-center col items-center q-anchor--skip justify-center row\\">+</span></button></div>
      </main>
    </div>"
  `);

  await wrapper.setProps({ supper: false });

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div class=\\"q-layout q-layout--standard\\" style=\\"min-height: 768px;\\">
      <!---->
      <!---->
      <main class=\\"q-page  q-layout-padding\\" style=\\"min-height: 768px;\\">
        <div class=\\"text-h4\\"> 2.5.5 <div class=\\"q-badge flex inline items-center no-wrap q-badge--single-line\\" style=\\"vertical-align: top;\\" role=\\"alert\\" data-test=\\"counter\\">0</div>
        </div>
        <hr class=\\"q-separator q-separator--horizontal\\" aria-orientation=\\"horizontal\\" />
        <div class=\\"q-btn-group row no-wrap q-btn-group--push inline\\"><button class=\\"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable\\" tabindex=\\"0\\" type=\\"button\\" data-test=\\"minus\\"><span class=\\"q-focus-helper\\"></span><span class=\\"q-btn__content text-center col items-center q-anchor--skip justify-center row\\">-</span></button><button class=\\"q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable\\" tabindex=\\"0\\" type=\\"button\\" data-test=\\"plus\\"><span class=\\"q-focus-helper\\"></span><span class=\\"q-btn__content text-center col items-center q-anchor--skip justify-center row\\">+</span></button></div>
      </main>
    </div>"
  `);

  const inner = wrapper.findComponent(BtnCounter);

  expect(inner.get('[data-test="counter"]').text()).toBe("0");

  await inner.get('[data-test="plus"]').trigger("click");

  expect(inner.get('[data-test="counter"]').text()).toBe("1");

  await inner.get('[data-test="plus"]').trigger("click");
  await inner.get('[data-test="plus"]').trigger("click");

  expect(inner.get('[data-test="counter"]').text()).toBe("3");

  await inner.get('[data-test="minus"]').trigger("click");
  await inner.get('[data-test="minus"]').trigger("click");
  await inner.get('[data-test="minus"]').trigger("click");
  await inner.get('[data-test="minus"]').trigger("click");

  expect(inner.get('[data-test="counter"]').text()).toBe("-1");
});
