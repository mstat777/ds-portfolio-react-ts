export function randomPosition(): number {
    const random: number = 50 - Math.ceil(Math.random() * 100);
    return random;
}