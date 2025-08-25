# Smart Weight Monitoring App
**Stack:** Flutter, Dart, Bluetooth LE, ESP32, Load Cells, Firebase/Hive

- Connects to ESP32 over Bluetooth to read weight from 4 load cells.
- Triggers real-time alert when weight goes below configured limit.
- Device list management: add/edit/remove with custom name & threshold.
- Local caching with Hive; optional cloud sync.
- Clean UI with dark/light themes.

**Highlights**
- Stable BLE reconnection logic.
- Command protocol: `/D ...;` add, `/E ...;` edit, `/R id:...;` remove.

**Screenshots**
_Add images later in `/assets/` and reference them here._