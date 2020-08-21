declare module 'starter/src/core/utils/usefulFunc' {
	 const _default: () => Promise<{}>;
	export default _default;
	export const Data: {
	    some: string;
	    sample: string;
	    object: number;
	};

}
declare module 'starter/src/index' {
	export {};

}
declare module 'starter/src/core/utils/usefulClass' {
	export const usefulClass: {
	    new (name: any): {
	        _name: string;
	        getName: () => string;
	    };
	};

}
