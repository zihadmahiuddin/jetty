/// <reference types="node"/>
// Type definitions for Jetty v0.2.1
// Project: https://github.com/fknsrs/jetty
// Definitions by: Zihad <https://github.com/zihadmahiuddin>
// Definitions: https://github.com/zihadmahiuddin/jetty

declare module "jetty" {
  export type StyleFunction = (str: string) => void;

  export default class Jetty {
    constructor(stream: NodeJS.WriteStream);
    _read: (n: any) => void;
    seq: (char: string, args: any[]) => void;
    text: (str: string, styleFn?: StyleFunction) => void;
    erase: (n: number, styleFn: StyleFunction) => void;
    rgb: (channels: number[] | number, isBg: boolean) => void;
    nuke: () => void;
    clear: () => void;

    // codes array
    moveUp: (n: number | number[]) => void;
    // TODO: add tyings for the rest of the methods

    // sgrCodes array
    reset: (n: number) => void;
    // TODO: add tyings for the rest of the methods
  }
}
