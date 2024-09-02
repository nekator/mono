import {
	Component,
	Input,
	NO_ERRORS_SCHEMA,
	type OnInit,
	type TemplateRef
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
	COLOR,
	COLOR_CONST,
	DBCard,
	DBDivider,
	DBLink,
	DENSITY,
	DENSITY_CONST
} from '../../../../../output/angular/src';
import type {
	DefaultComponentProps,
	DefaultComponentVariants
} from '../../../../shared/default-component-data';

@Component({
	selector: 'app-default-component',
	templateUrl: './default.component.html',
	imports: [DBCard, DBDivider, DBLink, NgTemplateOutlet],
	standalone: true,
	schemas: [NO_ERRORS_SCHEMA]
})
export class DefaultComponent implements OnInit {
	@Input() title: DefaultComponentProps['title'] = '';
	@Input() variants: DefaultComponentProps['variants'] = [];
	@Input() exampleTemplate!: TemplateRef<any>;

	density = DENSITY.REGULAR;
	color = COLOR.NEUTRAL_BG_LEVEL_1;
	page?: string;

	variantRef: DefaultComponentVariants | undefined;
	variantRefIndex = 0;

	constructor(private readonly route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((parameters) => {
			if (parameters[DENSITY_CONST]) {
				this.density = parameters[DENSITY_CONST];
			}

			if (parameters['page']) {
				this.page = parameters['page'];

				const foundVariant = this.variants.find(
					(variant) => variant.name.toLowerCase() === this.page
				);

				this.variantRef = foundVariant;
				if (foundVariant) {
					this.variantRefIndex = this.variants.indexOf(foundVariant);
				}
			}

			if (parameters[COLOR_CONST]) {
				this.color = parameters[COLOR_CONST];
			}
		});
	}

	getLink = (variantName: string) => {
		let currentUrl = window.location.href;
		if (!currentUrl.includes('?')) {
			currentUrl += '?';
		}

		if (!currentUrl.includes('color=')) {
			currentUrl += `&color=${this.color || COLOR.NEUTRAL_BG_LEVEL_1}`;
		}

		if (!currentUrl.includes('density=')) {
			currentUrl += `&density=${this.density || DENSITY.REGULAR}`;
		}

		return `${currentUrl}&page=${variantName.toLowerCase()}`;
	};

	getElevation = (): '1' | '2' | '3' =>
		this.color?.includes('3') ? '3' : this.color?.includes('2') ? '2' : '1';
}
