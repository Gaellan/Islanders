import { createMinimapButton } from "./minimap/minimap.js";
import { createInventoryButton } from "./inventory/inventory.js";

export default function loadActionBar() {
    createMinimapButton();
    createInventoryButton();
}