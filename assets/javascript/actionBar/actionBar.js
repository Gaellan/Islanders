import { createMinimapButton } from "./minimap/minimap.js";
import { createInventoryButton } from "./inventory/inventory.js";
import { createEquipmentButton } from "./equipment/equipment.js";

export default function loadActionBar() {
    createMinimapButton();
    createInventoryButton();
    createEquipmentButton();
}