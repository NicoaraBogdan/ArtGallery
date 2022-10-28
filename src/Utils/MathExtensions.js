export function clamp(min, max, number){
    return Math.max(Math.min(number, max), min);
}