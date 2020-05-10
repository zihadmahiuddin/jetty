/// <reference types="node"/>
// Type definitions for Jetty v0.2.2
// Project: https://github.com/fknsrs/jetty
// Definitions by: Zihad <https://github.com/zihadmahiuddin>, Nazmul <https://github.com/DeveloperNazmul>
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

    moveUp: (n: number | number[]) => void;
    moveDown: (n: number | number[]) => void;
    moveLeft: (n: number | number[]) => void;
    moveRight: (n: number | number[]) => void;
    lineUp: (n: number | number[]) => void;
    lineDown: (n: number | number[]) => void;
    save: (n: number | number[]) => void;
    restore: (n: number | number[]) => void;
    hide: (n: number | number[]) => void;
    show: (n: number | number[]) => void;
    sgr: (n: number | number[]) => void;

    reset: (n: number) => void;
    bold: (n: number) => void;
    faint: (n: number) => void;
    italic: (n: number) => void;
    underline: (n: number) => void;
    blink: (n: number) => void;
    binkRapid: (n: number) => void;
    imageNegative: (n: number) => void;
    conceal: (n: number) => void;
    strikeout: (n: number) => void;
    boldOff: (n: number) => void;
    normal: (n: number) => void;
    italicOff: (n: number) => void;
    underlineOff: (n: number) => void;
    blinkOff: (n: number) => void;
    imagePositive: (n: number) => void;
    reveal: (n: number) => void;
    strikeoutOff: (n: number) => void;
    defaultColour: (n: number) => void;
    defaultBackgroundColour: (n: number) => void;
    frame: (n: number) => void;
    encircle: (n: number) => void;
    overline: (n: number) => void;
    frameOff: (n: number) => void;
  }
}
