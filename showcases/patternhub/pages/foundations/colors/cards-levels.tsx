import { useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { DBButton, DBTag, DBCard } from '../../../components/src';
import { SEMANTICS } from '../../../components/src/shared/constants';
import { ColorSchemePreview } from './color-schemes';

const colors = ['neutral', ...SEMANTICS];

const ColorOverview = () => {
	return (
		<DefaultPage>
			<h1>Cards & Levels</h1>
			<ColorSchemePreview>
				<section className="color-cards">
					{colors.map((color) => (
						<div key={color} className={`db-${color}-bg-lvl-1`}>
							<DBCard spacing="medium" elevationLevel="3">
								<DBCard spacing="medium" elevationLevel="2">
									<DBCard spacing="medium">{color}</DBCard>
								</DBCard>
							</DBCard>
						</div>
					))}
				</section>
			</ColorSchemePreview>
		</DefaultPage>
	);
};

export default ColorOverview;
