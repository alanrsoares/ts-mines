/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface Global {
    /**
     * Used internally for managing PWA updates
     */
    appVersion: string;
  }
}
