import { DBNotification, DBLink } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/notification.json';
import { type DBNotificationProps } from '../../../../../output/react/src/components/notification/model';
import { getVariants } from '../data';

const getBasePath = (): string => {
	try {
		return process?.env?.NEXT_PUBLIC_BASE_PATH;
	} catch {}

	return import.meta.env.BASE_URL;
};

const getNotification = ({
	semantic,
	icon,
	headline,
	variant,
	children,
	behaviour,
	link,
	timestamp,
	linkVariant,
	img
}: DBNotificationProps & { link: boolean; img: boolean }) => (
	<DBNotification
		semantic={semantic}
		icon={icon}
		headline={headline}
		slotLink={link ? <DBLink href="#">Textlink</DBLink> : undefined}
		slotImage={
			img ? (
				<img
					src={`${getBasePath()}/assets/images/placeholder.png`}
					alt="Placeholder"
				/>
			) : undefined
		}
		variant={variant}
		behaviour={behaviour}
		linkVariant={linkVariant}
		timestamp={timestamp}
		onClose={() => {
			// eslint-disable-next-line no-alert
			alert(children.toString());
		}}>
		{children}
	</DBNotification>
);

const NotificationComponent = () => {
	return (
		<DefaultComponent
			title="DBNotification"
			variants={getVariants(
				defaultComponentVariants,
				getNotification
			)}></DefaultComponent>
	);
};

export default NotificationComponent;
