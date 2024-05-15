import Link from 'next/link';
import { DBIcon } from '../../../../output/react/src';

const LinkHeader = ({ id }) => {
	if (id) {
		return (
			<Link className="header-link" href={`?current=${id}`}>
				<DBIcon icon="add_link" />
				{id} anchor link
			</Link>
		);
	}

	return null;
};

export default LinkHeader;
