/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2023-01-25 14:02
 */

import React            from "react";
import { Subscription } from "rxjs";
import { container }    from 'tsyringe';

export interface ICmComponent {
	name: string;
}

export abstract class CmComponent extends React.Component implements ICmComponent {
	name: string;
	constructor(name: string) {
		super(name);

		this.name = name;
	}
}

export class CmApiComponent extends CmComponent {
	private subscriptions: { [key: string]: Subscription };

	constructor(props: any) {
		super(props);
		this.subscriptions = {};
	}

	componentWillUnmount() {
		Object.values(this.subscriptions).forEach((subscription) => {
			subscription.unsubscribe();
		});
	}

	@consumeEvent('serverData')
	private handleServerData(data: any) {
		console.log(data);
	}
}
