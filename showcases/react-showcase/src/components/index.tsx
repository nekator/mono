import React, { useCallback, useState } from 'react';
import { DBCard, DBDivider, DBLink } from '../../../../output/react/src';
import useQuery from '../hooks/use-query';
import type {
	DefaultComponentProps,
	DefaultComponentVariants
} from '../../../shared/default-component-data';
import useUniversalSearchParameters from '../hooks/use-universal-search-parameters';

const VariantList = ({
	examples,
	color,
	SlotCode
}: DefaultComponentVariants) => {
	const getElevation = useCallback(
		() => (color?.includes('3') ? '3' : color?.includes('2') ? '2' : '1'),
		[color]
	);

	const [open, setOpen] = useState<boolean>();

	return (
		<DBCard
			className="variants-card db-code-docs"
			elevationLevel={getElevation()}>
			<div className="variants-list">
				{examples.map((example, exampleIndex) => (
					<div
						key={`${example.name}-${exampleIndex}`}
						style={example.style}
						className={example.className}>
						{example.example}
					</div>
				))}
			</div>

			{SlotCode && (
				<details
					className="code-details"
					onToggle={() => {
						setOpen(!open);
					}}>
					<summary
						className="db-button code-button"
						data-size="small"
						data-variant="filled">
						{open ? 'Hide code' : 'Show code'}
					</summary>
					<div className="db-density-functional">
						<div className="backdrop" />
						<DBCard className="code" spacing="small">
							<SlotCode />
						</DBCard>
					</div>
				</details>
			)}
		</DBCard>
	);
};

const DefaultComponent = ({ title, variants }: DefaultComponentProps) => {
	const pageName = useQuery()[4];
	const color = useQuery()[2];

	const getHref = (variantName: string): string => {
		if (typeof window !== 'undefined') {
			return `${window.location.href}&page=${variantName.toLowerCase()}`;
		}

		return '';
	};

	const openVariantInNewWindow = (
		event: React.MouseEvent<HTMLAnchorElement>,
		variantName: string
	) => {
		event.preventDefault();

		if (window) {
			window.open(
				`${window.location.href}&page=${variantName.toLowerCase()}`,
				'_blank'
			);
		}
	};

	if (pageName) {
		const foundVariant = variants.find(
			(variant) => variant.name.toLowerCase() === pageName
		);
		if (foundVariant) {
			return <VariantList {...foundVariant} color={color} />;
		}
	}

	return (
		<div className="default-container">
			<h1>{title}</h1>
			{variants?.map((variant, index) => (
				<div key={`${variant.name}-${index}`}>
					<DBDivider></DBDivider>
					<DBLink
						className="link-headline"
						content="external"
						target="_blank"
						onClick={(event) => {
							openVariantInNewWindow(event, variant.name);
						}}
						href={getHref(variant.name)}>
						{variant.name}
					</DBLink>
					<VariantList {...variant} color={color} />
				</div>
			))}
		</div>
	);
};

export default DefaultComponent;
