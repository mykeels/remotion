// eslint-disable-next-line no-restricted-imports
import {Config as RemotionConfig, Internals} from 'remotion';
import {getBrowser} from './browser';
import {getBrowserExecutable} from './browser-executable';
import {
	getChromiumDisableWebSecurity,
	getChromiumHeadlessMode,
	getChromiumOpenGlRenderer,
	getIgnoreCertificateErrors,
} from './chromium-flags';
import {getOutputCodecOrUndefined} from './codec';
import {getConcurrency} from './concurrency';
import {getDotEnvLocation} from './env-file';
import {
	getCustomFfmpegExecutable,
	getCustomFfprobeExecutable,
} from './ffmpeg-executable';
import {getRange, setFrameRangeFromCli} from './frame-range';
import {getUserPreferredImageFormat} from './image-format';
import {getShouldOutputImageSequence} from './image-sequence';
import * as Logging from './log';
import {getMaxTimelineTracks} from './max-timeline-tracks';
import {getOutputLocation} from './output-location';
import {
	defaultOverrideFunction,
	getWebpackOverrideFn,
} from './override-webpack';
import {getShouldOverwrite} from './overwrite';
import {getPixelFormat} from './pixel-format';
import {getServerPort} from './preview-server';
import {getProResProfile} from './prores-profile';
import {getQuality} from './quality';
import {getScale} from './scale';
import {getStillFrame, setStillFrame} from './still-frame';
import {getCurrentPuppeteerTimeout} from './timeout';
import {getWebpackCaching} from './webpack-caching';

import type {WebpackConfiguration} from '@remotion/bundler';
// eslint-disable-next-line no-restricted-imports
import type {ConfigType} from 'remotion';
import {
	getAudioBitrate,
	getVideoBitrate,
	setAudioBitrate,
	setVideoBitrate,
} from './bitrate';
import {setBrowserExecutable} from './browser-executable';
import {
	setChromiumDisableWebSecurity,
	setChromiumHeadlessMode,
	setChromiumIgnoreCertificateErrors,
	setChromiumOpenGlRenderer,
} from './chromium-flags';
import {setCodec, setOutputFormat} from './codec';
import type {Concurrency} from './concurrency';
import {setConcurrency} from './concurrency';
import {getCrfOrUndefined, setCrf} from './crf';
import {
	getEnforceAudioTrack,
	setEnforceAudioTrack,
} from './enforce-audio-track';
import {getEntryPoint, setEntryPoint} from './entry-point';
import {setDotEnvLocation} from './env-file';
import {getEveryNthFrame, setEveryNthFrame} from './every-nth-frame';
import {setFfmpegExecutable, setFfprobeExecutable} from './ffmpeg-executable';
import {
	getFfmpegOverrideFunction,
	setFfmpegOverrideFunction,
} from './ffmpeg-override';
import {setFrameRange} from './frame-range';
import {getHeight, overrideHeight} from './height';
import {setImageFormat} from './image-format';
import {setImageSequence} from './image-sequence';
import {
	getKeyboardShortcutsEnabled,
	setKeyboardShortcutsEnabled,
} from './keyboard-shortcuts';
import {setLogLevel} from './log';
import {setMaxTimelineTracks} from './max-timeline-tracks';
import {getMuted, setMuted} from './muted';
import {getNumberOfGifLoops, setNumberOfGifLoops} from './number-of-gif-loops';
import {setNumberOfSharedAudioTags} from './number-of-shared-audio-tags';
import {setOutputLocation} from './output-location';
import type {WebpackOverrideFn} from './override-webpack';
import {overrideWebpackConfig} from './override-webpack';
import {setOverwriteOutput} from './overwrite';
import {setPixelFormat} from './pixel-format';
import {setPort} from './preview-server';
import {setProResProfile} from './prores-profile';
import {getPublicDir, setPublicDir} from './public-dir';
import {setQuality} from './quality';
import {setScale} from './scale';
import {setPuppeteerTimeout} from './timeout';
import {setWebpackCaching} from './webpack-caching';
import {getWidth, overrideWidth} from './width';

export const Config: ConfigType = {
	Preview: {
		setMaxTimelineTracks,
		setKeyboardShortcutsEnabled,
		setNumberOfSharedAudioTags,
	},
	Bundling: {
		overrideWebpackConfig,
		setCachingEnabled: setWebpackCaching,
		setPort,
		setPublicDir,
		setEntryPoint,
	},
	Log: {
		setLevel: setLogLevel,
	},
	Puppeteer: {
		setBrowserExecutable,
		setTimeoutInMilliseconds: setPuppeteerTimeout,
		setChromiumDisableWebSecurity,
		setChromiumIgnoreCertificateErrors,
		setChromiumHeadlessMode,
		setChromiumOpenGlRenderer,
	},
	Rendering: {
		setDotEnvLocation,
		setConcurrency,
		setQuality,
		setImageFormat,
		setFrameRange,
		setFfmpegExecutable,
		setFfprobeExecutable,
		setScale,
		setEveryNthFrame,
		setNumberOfGifLoops,
		setMuted,
		setEnforceAudioTrack,
	},
	Output: {
		setOutputLocation,
		setOverwriteOutput,
		setPixelFormat,
		setOutputFormat,
		setCodec,
		setCrf,
		setImageSequence,
		setProResProfile,
		setAudioBitrate,
		setVideoBitrate,
		overrideHeight,
		overrideWidth,
		overrideFfmpegCommand: setFfmpegOverrideFunction,
	},
} as ConfigType;

export type {Concurrency, WebpackConfiguration, WebpackOverrideFn};

// eslint-disable-next-line no-restricted-imports

export const ConfigInternals = {
	getRange,
	getOutputCodecOrUndefined,
	getCustomFfmpegExecutable,
	getBrowser,
	getPixelFormat,
	getProResProfile,
	getShouldOverwrite,
	getBrowserExecutable,
	getCustomFfprobeExecutable,
	getScale,
	getServerPort,
	getChromiumDisableWebSecurity,
	getIgnoreCertificateErrors,
	getChromiumHeadlessMode,
	getChromiumOpenGlRenderer,
	getEveryNthFrame,
	getConcurrency,
	getCurrentPuppeteerTimeout,
	getQuality,
	getStillFrame,
	getShouldOutputImageSequence,
	getDotEnvLocation,
	getUserPreferredImageFormat,
	getWebpackOverrideFn,
	getWebpackCaching,
	getOutputLocation,
	Logging,
	setFrameRangeFromCli,
	setStillFrame,
	getMaxTimelineTracks,
	defaultOverrideFunction,
	setMuted,
	getMuted,
	getEnforceAudioTrack,
	setEnforceAudioTrack,
	getKeyboardShortcutsEnabled,
	getPublicDir,
	getFfmpegOverrideFunction,
	getAudioBitrate,
	getVideoBitrate,
	getHeight,
	getWidth,
	getCrfOrUndefined,
	getEntryPoint,
	getNumberOfGifLoops,
};

export const overrideRemotion = () => {
	Object.assign(RemotionConfig, Config);
	Internals.enableLegacyRemotionConfig();
};
