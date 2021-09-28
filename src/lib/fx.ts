export type SFXKind = "explosion" | "disabled" | "detect" | "reveal" | "streak";

export async function playSoundEffect(kind: SFXKind) {
  const element = document.querySelector(`#sfx-${kind}`) as HTMLAudioElement;

  if (!element) {
    throw new Error(`Invalid sound effect: ${kind}`);
  }

  try {
    await element.play();
  } catch (error) {
    console.log(`Failed to play sound effect: ${kind}`);
  }
}
