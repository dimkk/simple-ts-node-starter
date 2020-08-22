declare module 'core/utils/usefulFunc' {
	 const _default: () => Promise<{}>;
	export default _default;
	export const Data: {
	    some: string;
	    sample: string;
	    object: number;
	};

}
declare module 'index' {
	export {};

}
declare module 'core/utils/logger' {
	import * as winston from 'winston'; const logger: winston.Logger;
	export default logger;

}
declare module 'core/utils/usefulClass' {
	export const usefulClass: {
	    new (name: any): {
	        _name: string;
	        getName: () => string;
	    };
	};

}
