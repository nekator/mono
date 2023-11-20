/*
 * Handles full release process for all assets
 */

import uploadAsset from './upload-asset.js';
import getIconReleaseId from './get-icon-release-id.js';

import ChildProcess from 'node:child_process';

const release = async ({ github, context, workspace, iconReleaseId }) => {
	const { id: release_id, tag_name } = context.payload.release;

	// 2. latest IconReleaseId
	const latestIconReleaseId = await getIconReleaseId({
		github,
		context,
		iconReleaseId,
		tag_name
	});

	// 3. Upload latest icon assets
	const iconsName = 'icons.zip';
	const iconsPath = `${workspace}/packages/foundations/assets`;
	ChildProcess.execSync(`zip -r ${iconsName} ${iconsPath}/icons`);

	// 3.1 Upload to current release
	await uploadAsset({
		github,
		context,
		release_id,
		assetName: iconsName,
		assetPath: `${iconsPath}/${iconsName}`
	});

	if (!context.payload.release.prerelease) {
		// 3.2 Upload to iconRelease -> will overwrite "latest" icons
		await uploadAsset({
			github,
			context,
			release_id: latestIconReleaseId,
			assetName: iconsName,
			assetPath: `${iconsPath}/${iconsName}`
		});
	}
};

export default release;
