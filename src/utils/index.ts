export const Log = {
  info(...args: any[]): void {
    console.log(...args);
  },
  warn(...args: any[]): void {
    console.warn(...args);
  },
  error(...args: any[]): void {
    console.error(...args);
  },
  i(...args: any[]): void {
    console.log("【mp-page-builder】 ", ...args);
  }
};

export function createLog(vm: any) {
  return {
    info(...args: any[]): void {
      console.log(vm, ...args);
    },
    warn(...args: any[]): void {
      console.warn(vm, ...args);
    },
    error(...args: any[]): void {
      console.error(vm, ...args);
    },
    i(...args: any[]): void {
      args;
      // console.log("【mp-page-builder】 ", ...args, vm);
    }
  };
}
