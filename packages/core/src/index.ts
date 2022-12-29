import './asset-types';
import type {TAsset, TCompMetadata} from './CompositionManager';
import {checkMultipleRemotionVersions} from './multiple-versions-warning';

declare global {
	interface Window {
		ready: boolean;
		getStaticCompositions: () => TCompMetadata[];
		setBundleMode: (bundleMode: BundleState) => void;
		remotion_staticBase: string;
		remotion_editorName: string | null;
		remotion_numberOfAudioTags: number;
		remotion_projectName: string;
		remotion_cwd: string;
		remotion_previewServerCommand: string;
		remotion_setFrame: (frame: number) => void;
		remotion_initialFrame: number;
		remotion_proxyPort: number;
		remotion_audioEnabled: boolean;
		remotion_videoEnabled: boolean;
		remotion_puppeteerTimeout: number;
		remotion_inputProps: string;
		remotion_envVariables: string;
		remotion_collectAssets: () => TAsset[];
		remotion_isPlayer: boolean;
		remotion_isBuilding: undefined | (() => void);
		remotion_finishedBuilding: undefined | (() => void);
		siteVersion: '4';
		remotion_version: string;
		remotion_imported: string | boolean;
	}
}

export type BundleState =
	| {
			type: 'index';
	  }
	| {
			type: 'evaluation';
	  }
	| {
			type: 'composition';
			compositionName: string;
			compositionDefaultProps: unknown;
			compositionHeight: number;
			compositionDurationInFrames: number;
			compositionWidth: number;
			compositionFps: number;
	  };

checkMultipleRemotionVersions();

export * from './AbsoluteFill';
export * from './audio';
export * from './Composition';
export * from './CompositionManager';
export {Config, ConfigType} from './config';
export {getInputProps} from './config/input-props';
export * from './delay-render';
export * from './easing';
export * from './Folder';
export * from './freeze';
export * from './IFrame';
export * from './Img';
export * from './internals';
export * from './interpolate';
export {interpolateColors} from './interpolate-colors';
export {Loop} from './loop';
export {prefetch} from './prefetch';
export {random, RandomSeed} from './random';
export {registerRoot} from './register-root';
export * from './Sequence';
export {Series} from './series';
export * from './spring';
export {staticFile} from './static-file';
export * from './Still';
export * from './timeline-position-state';
export {useCurrentFrame} from './use-current-frame';
export * from './use-video-config';
export * from './version';
export * from './video';
export * from './video-config';
export * from './CanUseRemotionHooks'
