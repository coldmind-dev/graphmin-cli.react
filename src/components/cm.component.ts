/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2023-01-25 14:02
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
