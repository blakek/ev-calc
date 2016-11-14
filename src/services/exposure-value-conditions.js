export const conditions = {
  '-11': 'Milky Way galactic center',
  '-10': 'Milky Way galactic center',
  '-9': 'Milky Way galactic center',
  '-8': 'Dark night with subject under starlight (no or little moonlight)',
  '-7': 'Dark night with subject under starlight (no or little moonlight)',
  '-6': [
    'Subject in moonlight of a quarter moon',
    'Aurora borealis and australis'
  ],
  '-5': [
    'Subject in moonlight of a half moon',
    'Aurora borealis and australis'
  ],
  '-4': [
    'Subject in moonlight of a gibbous moon',
    'Bright aurora borealis and australis'
  ],
  '-3': [
    'Subject in moonlight of a full moon',
    'Bright aurora borealis and australis'
  ],
  '-2': [
    'Subject in moonlight of a full moon',
    'Full moon snowscape'
  ],
  '-1': 'Subject in dim ambient lighting',
  0: 'Subject in dim ambient lighting',
  1: [
    'Subject in dim ambient lighting',
    'Distant view of lit skyline'
  ],
  2: [
    'Distant views of lighted buildings',
    'Total eclipse of moon',
    'Lightning'
  ],
  3: [
    'Floodlit buildings, monuments, and fountains',
    'Fireworks'
  ],
  4: [
    'Christmas lights',
    'Candle light',
    'Floodlit buildings, monuments, and fountains',
    'Subject under bright street lamps'
  ],
  5: [
    'Christmas lights',
    'Night vehicle traffic',
    'Bright floodlit buildings, monuments, and fountains',
    'Dark (e.g. night) home interiors',
    'Subject lit by campfire fire at night',
    'Dimly lit auditorium'
  ],
  6: [
    'Home interiors',
    'Fairs and amusement parks'
  ],
  7: [
    'Fairly brightly lit city streets at night',
    'Window displays',
    'Fairs and amusement parks',
    'Indoor sports',
    'Home interiors',
    'Offices and work areas',
    'Bottom of rainforest canopy'
  ],
  8: [
    'Bright street scenes (e.g. Times Square or Las Vegas)',
    'Fairly brightly lit city streets at night',
    'Window displays',
    'Galleries',
    'Sports events, stage shows, etc.',
    'Indoor sports',
    'Football, baseball etc. at night or indoors',
    'Floodlit circuses and similar shows',
    'Offices and work areas',
    'Subject lit by bright florescent lights',
    'Campfires, bonfires, burning buildings'
  ],
  9: [
    'Landscape/skyline ~10 minutes after sunset',
    'Neon sign',
    'Night sports',
    'Galleries',
    'Sports events, stage shows, etc.',
    'Floodlit ice shows',
    'Subject lit by spotlight',
    'Fires and burning buildings'
  ],
  10: [
    'Landscapes or skylines after sunset',
    'Neon sign',
    'Galleries'
  ],
  11: [
    'Landscapes or skylines immediately after sunset',
    'Subjects in shade',
    'Galleries'
  ],
  12: [
    'Typical scene, heavy overcast',
    'Subject in open shade, clear sunlight',
    'Landscape or skyline at sunset',
    'Crescent moon'
  ],
  13: [
    'Typical scene, cloudy bright (no shadows)',
    'Skyline just before sunset',
    'Quarter moon'
  ],
  14: [
    'Typical scene in hazy sunlight (soft shadows)',
    'Rainbow with cloudy sky background',
    'Skyline just before sunset',
    'Gibbous moon'
  ],
  15: [
    'Typical scene in full or slightly hazy sunlight (distinct shadows)',
    'Rainbow with clear sky background',
    'Full moon'
  ],
  16: 'Light sand or snow in full or slightly hazy sunlight (distinct shadows)',
  17: 'Very bright lighting',
  18: 'Very bright lighting',
  19: 'Very bright lighting',
  20: 'Very, very bright lighting',
  21: 'Extremely bright lighting',
  limits: {
    high: 21,
    low: -11
  }
}

export function getConditions(exposureValue) {
  if (exposureValue > conditions.limits.high) {
    exposureValue = conditions.limits.high
  } else if (exposureValue < conditions.limits.low) {
    exposureValue = conditions.limits.low
  }

  if (Array.isArray(conditions[exposureValue])) {
    return conditions[exposureValue]
  }

  return [conditions[exposureValue]]
}

export default {
  conditions,
  getConditions
}
