import { config } from "@vue/test-utils";
import { Quasar } from "quasar";
import { mountQuasar } from './_utils/quasar'

config.global.plugins.push([Quasar, {}]);

globalThis.mountQuasar = mountQuasar