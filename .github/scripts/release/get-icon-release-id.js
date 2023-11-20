/*
 * Uploads a file to a release
 */

const getIconReleaseId = async ({
	github,
	context,
	iconReleaseId,
	tag_name
}) => {
	const { repo, owner } = context.repo;
	let releaseId = iconReleaseId;

	if (releaseId === 'false') {
		// We use release_id from GitHub variables https://github.com/db-ui/mono/settings/variables/actions/ICON_RELEASE_ID
		// At the first time we will generate the release via API
		const iconRelease = await github.rest.repos.createRelease({
			owner,
			repo,
			tag_name,
			body: 'Default icon release for downloading assets',
			prerelease: false,
			draft: false,
			generate_release_notes: false,
			make_latest: 'false'
		});
		if (iconRelease) {
			releaseId = iconRelease.id;
		}
	}

	return releaseId;
};

export default getIconReleaseId;
