export function getFakeStreamingPlatforms(title: string): string[] {
  if (title.toLowerCase().includes('star')) {
    return ['Disney+'];
  }

  return ['Netflix', 'Mubi'];
}
