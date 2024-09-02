import {
	DBPage,
	DBBrand,
	DBButton,
	DBHeader,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from '../../../../../output/react/src';
import { type DBPageProps } from '../../../../../output/react/src/components/page/model';
import defaultComponentVariants from '../../../../shared/page.json';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';
import { type BaseComponentProps } from '../base-component-data';

const getPage = ({
	variant,
	fadeIn,
	children,
	className,
	describedbyid,
	id,
	key
}: DBPageProps) => (
	<DBPage
		variant={variant}
		fadeIn={fadeIn}
		className={className}
		describedbyid={describedbyid}
		id={id}
		key={key}
		header={
			<DBHeader
				brand={<DBBrand title="DBHeader">DBHeader</DBBrand>}
				metaNavigation={
					<>
						<DBLink href="#">Imprint</DBLink>
						<DBLink href="#">Help</DBLink>
					</>
				}
				primaryAction={
					<DBButton icon="magnifying_glass" variant="ghost" noText>
						Search
					</DBButton>
				}
				secondaryAction={
					<>
						<DBButton icon="user" variant="ghost" noText>
							Profile
						</DBButton>
						<DBButton icon="bell" variant="ghost" noText>
							Notification
						</DBButton>
						<DBButton
							icon="question_mark_circle"
							variant="ghost"
							noText>
							Help
						</DBButton>
					</>
				}>
				<DBNavigation>
					<DBNavigationItem icon="user">
						<a href="#">{children}</a>
					</DBNavigationItem>
					<DBNavigationItem disabled>
						<a href="#">{children} disabled</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
		}
		footer={<>Footer Content</>}>
		My Page Content
	</DBPage>
);

const PageComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBPage"
			variants={getVariants(
				defaultComponentVariants,
				getPage,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default PageComponent;
