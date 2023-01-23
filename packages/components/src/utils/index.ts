export const uuid = () => {
	return window?.crypto?.randomUUID() || Math.random().toString();
};

export const DEFAULT_ID =
	'ID_WILL_BE_OVERWRITE_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARE_A_JAVA_DEVELOPER';
