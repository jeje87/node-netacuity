declare module 'node-netacuity' {
    export class NetAcuity {
        constructor(config: Config)
        public generateEdgeMessage(ip: string, transactionId: string): Buffer;
        public get(ip: string, callback: (error: any, result: EdgeRecord) => void): void;
        public close(callback: Function): void;
    }

    export interface EdgeRecord {
        apiVersion: number;
        ip: string;
        transactionId: string;
        error: string;
        country: string;
        region: string;
        city: string;
        connectionSpeed: string;
        metroCode: number;
        latitude: number;
        longitude: number;
        postCode: string;
        countryCode: number;
        regionCode: number;
        cityCode: number;
        continentCode: number;
        isoCountryCode: string;
        areaCodes: string;
        countryConfidence: number;
        regionConfidence: number;
        cityConfidence: number;
        postCodeConfidence: number;
        gmtOffest: number;
        inDst: boolean;
    }

    class EdgeRecord implements EdgeRecord {

        constructor(fields: Array<any>);
        public sameAs(other: EdgeRecord): boolean;
        public toString(): string;
    }

    export class EdgeQuery {
        constructor(appId: number, ip: string, transactionId: string);
        public static parse(s: string): EdgeQuery;
        public toString(): string;
    }

    export class NetAcuityServer {
        constructor(host: string, port: number);
    }

    export class NetAcuityCache extends NetAcuity {
        public reset(): void;
    }

    export interface Config {
        port?: number;
        timeout?: number;
        servers: Array<Server>;
        appId?: number;
        failoverWindow?: number;
        failoverThreshold?: 3;
        dns?: DNS;
        cache?: Cache;
    }

    export interface Server {
        host: string;
        port?: number;
    }

    export interface DNS {
        maxAge?: number;
        useLookup?: boolean;
    }

    export interface Cache {
        max: number;
        maxAge: number;
    }
}
