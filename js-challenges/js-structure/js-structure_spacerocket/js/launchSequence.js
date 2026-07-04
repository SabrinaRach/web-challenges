// Implement the launch sequence function here and export it as the default export.
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

// The launch() function must be the default export of the module.
export default function launch() {
  // Step 1: Load payload (jeder Satellit einzeln)
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  // Step 2: Fueling
  fuel();

  // Step 3: Countdown (5 Sekunden) - zählt bis fünf
  // startet bei 0, zählt bis 5, immer +1
  for (let i = 0; i < 5; i++) {
    countdown();
  }

  // Step 4: Liftoff
  liftoff();

  // Step 5: Deploy payload
  deployPayload();
}
