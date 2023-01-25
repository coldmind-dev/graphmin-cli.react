/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2023-01-25 09:39
 */

import { container } from 'tsyringe';

interface ICmComponent {
	name: string;
}

abstract class CmComponent implements ICmComponent {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}

// Decorator
function cmComponent(target: any) {
	container.register(`${target.name}`, { useClass: target });
}

// Usage
@cmComponent
class MyComponent extends CmComponent {
	constructor(name: string) {
		super(name);
	}
}

@cmComponent
class MyOtherComponent extends CmComponent {
	constructor(name: string) {
		super(name);
	}
}

