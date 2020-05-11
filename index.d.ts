/// <reference types="node"/>
// Type definitions for Jetty v0.2.2
// Project: https://github.com/fknsrs/jetty
// Definitions by: Zihad <https://github.com/zihadmahiuddin>, Nazmul <https://github.com/DeveloperNazmul>
// Definitions: https://github.com/zihadmahiuddin/jetty
declare module "jetty" {
  export type StyleFunction = (str: string) => void;
  import stream from "stream";

  export default class Jetty extends stream.Readable {
    constructor(stream: stream.Writable);
    _read: (n?: any) => void;
    seq: (char?: string, args?: any[]) => Jetty;
    text: (str?: string, styleFn?: StyleFunction) => Jetty;
    erase: (n?: number, styleFn?: StyleFunction) => Jetty;
    rgb: (channels?: number[] | number, isBg?: boolean) => Jetty;
    nuke: () => Jetty;

    moveUp: (n?: number | number[]) => Jetty;
    moveDown: (n?: number | number[]) => Jetty;
    moveLeft: (n?: number | number[]) => Jetty;
    moveRight: (n?: number | number[]) => Jetty;
    lineUp: (n?: number | number[]) => Jetty;
    lineDown: (n?: number | number[]) => Jetty;
    moveTo: (n?: number | number[]) => Jetty;
    clear: (n?: number | number[]) => Jetty;
    clearLine: (n?: number | number[]) => Jetty;
    save: (n?: number | number[]) => Jetty;
    restore: (n?: number | number[]) => Jetty;
    hide: (n?: number | number[]) => Jetty;
    show: (n?: number | number[]) => Jetty;
    sgr: (n?: number | number[]) => Jetty;

    reset: (n?: number) => Jetty;
    bold: (n?: number) => Jetty;
    faint: (n?: number) => Jetty;
    italic: (n?: number) => Jetty;
    underline: (n?: number) => Jetty;
    blink: (n?: number) => Jetty;
    binkRapid: (n?: number) => Jetty;
    imageNegative: (n?: number) => Jetty;
    conceal: (n?: number) => Jetty;
    strikeout: (n?: number) => Jetty;
    font: (n?: number) => Jetty;
    boldOff: (n?: number) => Jetty;
    normal: (n?: number) => Jetty;
    italicOff: (n?: number) => Jetty;
    underlineOff: (n?: number) => Jetty;
    blinkOff: (n?: number) => Jetty;
    imagePositive: (n?: number) => Jetty;
    reveal: (n?: number) => Jetty;
    strikeoutOff: (n?: number) => Jetty;
    legacyColour: (n?: number) => Jetty;
    colour: (n?: number) => Jetty;
    defaultColour: (n?: number) => Jetty;
    legacyBackgroundColour: (n?: number) => Jetty;
    backgroundColour: (n?: number) => Jetty;
    defaultBackgroundColour: (n?: number) => Jetty;
    frame: (n?: number) => Jetty;
    encircle: (n?: number) => Jetty;
    overline: (n?: number) => Jetty;
    frameOff: (n?: number) => Jetty;
  }
}
