export function getExposureValue(fStop, exposureTime, sensitivity) {
  return Math.log2(fStop ** 2) + Math.log2(1 / exposureTime) - Math.log2(sensitivity / 100)
}

export default getExposureValue
