/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface Global {
    /**
     * Used internally for managing PWA updates
     */
    appVersion: string;
  }
}

// declare module "*.svg" {
//   import * as React from "react";

//   const src: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;
//   export default src;
// }
