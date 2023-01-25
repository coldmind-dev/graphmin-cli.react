/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2023-01-25 14:23
 */

import { container } from "tsyringe";

export function ApiComponent(event: string) {
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		container.register(`${ target.name }`, { useClass: target });
	}
}
