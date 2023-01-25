/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2023-01-25 09:39
 */

import { container } from 'tsyringe';


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

