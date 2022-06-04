declare var reach: Reachable;

declare module 'reachability' {
	export = reach;
}

interface Reachable {
	check(): Promise<boolean>;
	listen(): any;
	watch(): any;
}

