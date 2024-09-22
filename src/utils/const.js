import {BackgroundBlur, DropShadow, FailedEffect, InnerShadow, LayerBlur, MixEffect} from 'components/icons/style'
import {
  LargeBold,
  LargeRegular,
  LargeThin,
  NormalBold,
  NormalRegular,
  NormalThin,
  SmallBold,
  SmallRegular,
  SmallThin,
} from 'components/icons/text'
import React from 'react'

export const STYLE_TYPES = {
  FILL: 'fill type',
  TEXT: 'text type',
  EFFECT: 'effect type',
  GRID: 'grid type',
}

export const PAINTS = [
  'SOLID',
  'GRADIENT_LINEAR',
  'GRADIENT_RADIAL',
  'GRADIENT_ANGULAR',
  'GRADIENT_DIAMOND',
  'IMAGE',
  'EMOJI',
]

export const EFFECTS = {
  INNER_SHADOW: {
    icon: <InnerShadow size={18} className="effect-thumbnail" />,
  },
  DROP_SHADOW: {
    icon: <DropShadow size={18} className="effect-thumbnail" />,
  },
  LAYER_BLUR: {
    icon: <LayerBlur size={18} className="effect-thumbnail" />,
  },
  BACKGROUND_BLUR: {
    icon: <BackgroundBlur size={18} className="effect-thumbnail" />,
  },
  MIX_EFFECT: {
    icon: <MixEffect size={18} className="effect-thumbnail" />,
  },
  FAILED_EFFECT: {
    icon: <FailedEffect size={18} className="effect-thumbnail" />,
  },
}

export const TEXTS = {
  'small-thin': <SmallThin size={16} className="text-thumbnail" />,
  'normal-thin': <NormalThin size={16} className="text-thumbnail" />,
  'large-thin': <LargeThin size={16} className="text-thumbnail" />,
  'small-regular': <SmallRegular size={16} className="text-thumbnail" />,
  'normal-regular': <NormalRegular size={16} className="text-thumbnail" />,
  'large-regular': <LargeRegular size={16} className="text-thumbnail" />,
  'small-bold': <SmallBold size={16} className="text-thumbnail" />,
  'normal-bold': <NormalBold size={16} className="text-thumbnail" />,
  'large-bold': <LargeBold size={16} className="text-thumbnail" />,
}

export const PLATFORMS = ['Web', 'iOS', 'Android', '百度健康 iOS', '百度健康 Android']

export const WEB_MULTIPLE = [
  {
    label: '1x',
    value: 1,
  },
  {
    label: '2x',
    value: 2,
  },
  {
    label: '3x',
    value: 3,
  },
]

export const IOS_DENSITY = [
  {
    label: '@1x',
    value: 1,
  },
  {
    label: '@2x',
    value: 1 / 2,
  },
  {
    label: '@3x',
    value: 1 / 3,
  },
]

export const ANDROID_DENSITY = [
  {
    label: 'ldpi (4/3)',
    value: 4 / 3,
  },
  {
    label: 'mdpi',
    value: 1,
  },
  {
    label: 'tvdpi (3/4)',
    value: 3 / 4,
  },
  {
    label: 'hdpi (2/3)',
    value: 2 / 3,
  },
  {
    label: 'xhdpi (1/2)',
    value: 1 / 2,
  },
  {
    label: 'xxhdpi (1/3)',
    value: 1 / 3,
  },
  {
    label: 'xxxhdpi (1/4)',
    value: 1 / 4,
  },
]

export const NUMBER_FORMATS = ['retain 2', 'rounded integer', 'floored integer', 'ceiled integer']

export const UNITS = ['pt', 'dp', 'px', 'em', 'rem', 'rpx']

export const COLOR_FORMATS = ['HEX', 'HEXA', 'RGBA', 'HSLA']
export const ANDROID_COLOR_FORMATS = ['HEX', 'AHEX', 'RGBA', 'HSLA']

export const DEFAULT_SETTINGS = {
  convention: 1,
  platform: 0,
  resolution: 0,
  unit: 2,
  remBase: 16,
  numberFormat: 0,
  colorFormat: 0,
  language: 'zh',
  disableInspectExportInner: false,
  disableInspectInComponent: false,
  notShowStyleProperties: false,
  leftCollapse: false,
  rightCollapse: false,
}

export const LOCALIZED_SETTING_KEYS = [
  'disableInspectExportInner',
  'disableInspectInComponent',
  'colorFormat',
  'language',
  'notShowStyleProperties',
  'numberFormat',
  'leftCollapse',
  'rightCollapse',
]


export const MUZHI_COLOR_Android = {
  // 文字色
  'font-color' : {
      '#FF00C8C8': 'GC1',
      '#FFE0F8F8': 'GC2',
      '#FF00CFA3': 'GC3',
      '#FF00D3EA': 'GC4',
      '#FFFD503E': 'GC5',
      '#FFFF6600': 'GC6',
      '#FFFAA90E': 'GC7',
      '#FF4E6EF2': 'GC8',
      '#FFB7905D': 'GC9',
      '#FFAEC4DD': 'GC10',
      '#FF1F1F1F': 'GC11',
      '#FF525252': 'GC12',
      '#FF858585': 'GC13',
      '#FFB8B8B8': 'GC14',
      '#FFFFFFFF': 'GC15',
      '#FFF0F0F0': 'GC17',
      '#FFE0E0E0': 'GC19',
      '#FFF5F5F5': 'GC20',
      '#B3FFFFFF': 'GC21',
      '#FF00BCBC': 'GC26',
  },
  // 填充色
  'fill-color': {
    '#FF00C8C8': 'GC1',
    '#FFE0F8F8': 'GC2',
    '#FF00CFA3': 'GC3',
    '#FF00D3EA': 'GC4',
    '#FFFD503E': 'GC5',
    '#FFFF6600': 'GC6',
    '#FFFAA90E': 'GC7',
    '#FF4E6EF2': 'GC8',
    '#FFB7905D': 'GC9',
    '#FFAEC4DD': 'GC10',
    '#FF1F1F1F': 'GC11',
    '#FF525252': 'GC12',
    '#FF858585': 'GC13',
    '#FFB8B8B8': 'GC14',
    '#FFF5F5F5': 'GC16',
    '#FFF0F0F0': 'GC17',
    '#FFFFFFFF': 'GC18',
    '#FFE0E0E0': 'GC19',
    '#B3FFFFFF': 'GC21', // 特别处理透明度70%
    '#FFF8F8F8': 'GC22',
    '#FFEEFFFF': 'GC23',
    '#FFFFF0EF': 'GC24',
    '#FFFFF5EC': 'GC25',
  },
  // 线条色
  'border-color': {
    '#FF00C8C8': 'GC1',
    '#FFE0F8F8': 'GC2',
    '#FF00CFA3': 'GC3',
    '#FF00D3EA': 'GC4',
    '#FFFD503E': 'GC5',
    '#FFFF6600': 'GC6',
    '#FFFAA90E': 'GC7',
    '#FF4E6EF2': 'GC8',
    '#FFB7905D': 'GC9',
    '#FFAEC4DD': 'GC10',
    '#FF1F1F1F': 'GC11',
    '#FF525252': 'GC12',
    '#FF858585': 'GC13',
    '#FFB8B8B8': 'GC14',
    '#FFF0F0F0': 'GC17',
    '#FFFFFFFF': 'GC18',
    '#FFE0E0E0': 'GC19',
    '#FFF5F5F5': 'GC20',
    '#B3FFFFFF': 'GC21',
  },
}

export const MUZHI_COLOR_IOS = {
  // 文字色
  'font-color' : {
      '#00C8C8': 'GC1',
      '#E0F8F8': 'GC2',
      '#00CFA3': 'GC3',
      '#00D3EA': 'GC4',
      '#FD503E': 'GC5',
      '#FF6600': 'GC6',
      '#FAA90E': 'GC7',
      '#4E6EF2': 'GC8',
      '#B7905D': 'GC9',
      '#AEC4DD': 'GC10',
      '#1F1F1F': 'GC11',
      '#525252': 'GC12',
      '#858585': 'GC13',
      '#B8B8B8': 'GC14',
      '#FFFFFF': 'GC15',
      '#F0F0F0': 'GC17',
      '#E0E0E0': 'GC19',
      '#F5F5F5': 'GC20',
      '#FFFFFFB2': 'GC21',
      '#00BCBC': 'GC26',
  },
  // 填充色
  'fill-color': {
    '#00C8C8': 'GC1',
    '#E0F8F8': 'GC2',
    '#00CFA3': 'GC3',
    '#00D3EA': 'GC4',
    '#FD503E': 'GC5',
    '#FF6600': 'GC6',
    '#FAA90E': 'GC7',
    '#4E6EF2': 'GC8',
    '#B7905D': 'GC9',
    '#AEC4DD': 'GC10',
    '#1F1F1F': 'GC11',
    '#525252': 'GC12',
    '#858585': 'GC13',
    '#B8B8B8': 'GC14',
    '#F5F5F5': 'GC16',
    '#F0F0F0': 'GC17',
    '#FFFFFF': 'GC18',
    '#E0E0E0': 'GC19',
    '#FFFFFFB2': 'GC21', // 特别处理透明度70%
    '#F8F8F8': 'GC22',
    '#EEFFFF': 'GC23',
    '#FFF0EF': 'GC24',
    '#FFF5EC': 'GC25',
  },
  // 线条色
  'border-color': {
    '#00C8C8': 'GC1',
    '#E0F8F8': 'GC2',
    '#00CFA3': 'GC3',
    '#00D3EA': 'GC4',
    '#FD503E': 'GC5',
    '#FF6600': 'GC6',
    '#FAA90E': 'GC7',
    '#4E6EF2': 'GC8',
    '#B7905D': 'GC9',
    '#AEC4DD': 'GC10',
    '#1F1F1F': 'GC11',
    '#525252': 'GC12',
    '#858585': 'GC13',
    '#B8B8B8': 'GC14',
    '#F0F0F0': 'GC17',
    '#FFFFFF': 'GC18',
    '#E0E0E0': 'GC19',
    '#F5F5F5': 'GC20',
    '#FFFFFFB2': 'GC21',
  },
}

export const MUZHI_FONT_SIZE_Android = {
  '23px': 'TX1',
  '21px': 'TX2',
  '17px': 'TX3',
  '16px': 'TX5',
  '15px': 'TX6',
  '14px': 'TX7',
  '13px': 'TX8',
  '12px': 'TX9',
  '11px': 'TX10',
  '10px': 'TX11'
};

export const MUZHI_FONT_SIZE_IOS = {
  '27px': 'TX1',
  '24px': 'TX2',
  '20px': 'TX3',
  '19px': 'TX4',
  '18px': 'TX5',
  '17px': 'TX6',
  '16px': 'TX7',
  '15px': 'TX8',
  '14px': 'TX9',
  '13px': 'TX10',
  '12px': 'TX11'
};