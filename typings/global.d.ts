declare global {
  declare type Recordable<T = any> = Record<string, T>

  declare interface ViteEnv {
    VITE_PROT: number;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY: [string, string][];
    VITE_DROP_CONFIG: boolean;
  }
}

export {}
