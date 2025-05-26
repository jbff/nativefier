 # OpenAI Codex Updates

 The following changes have been applied by OpenAI Codex since the last commit:

 ## Version Bump
 - Updated root `package.json` version from `52.0.0` to `52.0.1` (then `52.0.2` to use electron 36.3.1 by default)

 ## Dependency Updates
 See [DEPENDENCY_UPDATES.md](DEPENDENCY_UPDATES.md) for full details on all dependency version bumps and shrinkwrap file updates.

 ## Type Declarations
 - Created `app/src/custom-modules.d.ts` to provide TypeScript declarations for:
   - `electron-context-menu`
   - `electron-dl`

 ## TypeScript Code Modifications
 - `app/src/components/mainWindow.ts`
   - Added type assertion `(window as any)` for the `leave-full-screen` event handler.

 - `app/src/components/menu.ts`
   - Simplified click handler signatures by removing explicit type annotations.
   - Added `(focusedWindow as any)` for `clearAppData` calls and `(focusedWindow as any).webContents.toggleDevTools()` to address typing issues.

 - `app/src/main.ts`
   - Applied non-null assertion operator (`!`) to `app.dock.setBadge()` and `app.dock.bounce()` calls.

 - `shared/src/options/model.ts`
   - Removed import of `CreateOptions` from `@electron/asar`.
   - Updated `RawOptions.asar` type to `electronPackager.Options['asar']`.

 - `src/playwright-test.ts`
   - Removed import of `once` from `events`.
   - Replaced Node.js event handling with Playwright's `waitForEvent` for dialog events.

 ## Shrinkwrap Updates
 - Regenerated `npm-shrinkwrap.json` and `app/npm-shrinkwrap.json` to lock in updated dependency versions.

 ---

 All Codex-applied changes are now complete.
