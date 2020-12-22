import globalModule from "./global";
import userModule from "./user";

export const global = globalModule.module();
export const user = userModule.module();

const modules = {
  global,
  user
};

export default modules;

export function mapState(moduleName: "user", key: keyof typeof user): typeof user[typeof key];
export function mapState(moduleName: "global", key: keyof typeof global): typeof global[typeof key];
export function mapState(moduleName: any, key: any) {
  return {
    [key]: modules[moduleName][key]
  };
}

export function mapMutaions(moduleName: "user", key: keyof typeof user);
export function mapMutaions(moduleName: "global", key: keyof typeof global);
export function mapMutaions(moduleName: any, key: any) {
  return {
    [key]: modules[moduleName][key]
  };
}

export function mapActions(moduleName: "user", key: keyof typeof user);
export function mapActions(moduleName: "global", key: keyof typeof global);
export function mapActions(moduleName: any, key: any) {
  return {
    [key]: modules[moduleName][key]
  };
}

const a = mapState("global", "screenWidth");
