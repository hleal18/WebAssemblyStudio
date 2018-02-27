export interface IConfig {
    serviceUrl: string;
    rustc: string;
}
export default function getConfig(): Promise<IConfig>;
