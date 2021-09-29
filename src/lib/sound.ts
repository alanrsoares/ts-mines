export type SoundEffectKind =
  | "explosion"
  | "disabled"
  | "defuse"
  | "reveal"
  | "streak"
  | "win";

export async function playSoundEffect(kind: SoundEffectKind) {
  const element = document.querySelector(
    `#sound-fx-${kind}`
  ) as HTMLAudioElement;

  if (!element) {
    throw new Error(`Invalid sound effect: ${kind}`);
  }

  try {
    await element.play();
  } catch (error) {
    console.log(`Failed to play sound effect: ${kind}`);
  }
}
