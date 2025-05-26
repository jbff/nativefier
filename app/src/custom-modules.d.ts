/**
 * Custom module declarations for modules without TypeScript type definitions
 */
declare module 'electron-context-menu' {
  /**
   * Default export is a function to set up context menus
   */
  function contextMenu(options?: any): void;
  namespace contextMenu {
    /**
     * Actions provided by electron-context-menu
     */
    export type Actions = any;
  }
  export default contextMenu;
}

declare module 'electron-dl' {
  /**
   * Default export is a function to handle downloads in Electron
   */
  const electronDownload: any;
  export default electronDownload;
}