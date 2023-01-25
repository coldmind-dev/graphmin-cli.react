/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2023-01-25 12:22
 */

export function consumeEvent(event: string) {
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;
		descriptor.value = function(...args: any[]) {
			const api = GraphminCli.getInstance();
			this.subscriptions = this.subscriptions || {};
			if (!this.subscriptions[event]) {
				this.subscriptions[event] = api.eventHub[event].subscribe((data: any) => {
					originalMethod.apply(this, [data, ...args]);
				});
			}
		};
	};
}
