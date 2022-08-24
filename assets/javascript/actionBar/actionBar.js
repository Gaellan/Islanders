import { createMinimapButton } from "./minimap/minimap.js";
import { createInventoryButton } from "./inventory/inventory.js";
import { createBuildButton } from "./build/build.js";
import { createDigButton } from "./dig/dig.js";
import { createSpeakButton } from "./speak/speak.js";
import { createTakeButton } from "./take/take.js";
import { createCutButton } from "./cut/cut.js";

export default function loadActionBar() {
    createMinimapButton();
    createInventoryButton();
    createBuildButton();
    createDigButton();
    createSpeakButton();
    createTakeButton();
    createCutButton();
}