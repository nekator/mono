/*
 * Uploads a file to a release
 */

const updateIconRelease = async ({ github, context, iconReleaseId }) => {
	const { repo, owner } = context.repo;
	let releaseId = iconReleaseId;

	const { tag_name } = await github.rest.repos.getLatestRelease({
		owner,
		repo
	});

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

	return await github.rest.repos.updateRelease({
		owner,
		repo,
		release_id: releaseId,
		tag_name
	});
};

export default updateIconRelease;
