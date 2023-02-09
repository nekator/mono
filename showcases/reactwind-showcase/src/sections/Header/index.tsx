import { DBButton, DBDivider, DBBrand } from '../../../../../output/react/src';

const links = ['Startseite', 'Hilfe & Kontakt', 'Verkehrsmeldungen'];
const menu = ['Tickets & Angebote', 'Info & Services', 'Meine Reisen'];

const Header = () => (
	<div className="header shadow-8">
		<div
			className="small-header hidden s:flex db-ui-functional
			db-bg-neutral-2 py-fix-md px-fix-xl justify-center s:justify-end gap-fix-xl">
			{links.map((link, index) => (
				<a href="#" key={`small-header-item-${index}`}>
					<small>{link}</small>
				</a>
			))}
		</div>

		<div className="navigation flex flex-wrap db-bg-neutral-0 p-fix-md gap-fix-xl s:rounded-b-lg">
			<DBBrand imgSrc="db_logo.svg"></DBBrand>
			<div className="hidden s:flex gap-fix-xl items-center">
				{menu.map((mItem, index) => (
					<strong key={`nav-item-${index}`}>{mItem}</strong>
				))}
			</div>
			<div className="ml-auto flex">
				<DBButton icon="search" onlyIcon variant="ghost" />
				<DBDivider variant="vertical" />
				<DBButton
					className="hidden s:flex"
					icon="account"
					variant="ghost">
					Login
				</DBButton>
				<DBButton
					onlyIcon
					className="flex s:hidden"
					icon="menu"
					variant="ghost"
				/>
			</div>
		</div>
	</div>
);

export default Header;
