/*
 * Handles full release process for all assets
 */

import uploadAsset from './upload-asset.js';
import updateIconRelease from './update-icon-release.js';

import ChildProcess from 'node:child_process';

const release = async ({ github, context, workspace, iconReleaseId }) => {
	const release_id = context.payload.release.id;

	// 2. Update  IconRelease with current tag
	const updatedIconRelease = await updateIconRelease({
		github,
		context,
		iconReleaseId
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
			release_id: updatedIconRelease.id,
			assetName: iconsName,
			assetPath: `${iconsPath}/${iconsName}`
		});
	}
};

export default release;
