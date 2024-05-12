
type Mods = Record<string, boolean | string>

export function classNames(mainClass: string, mods: Mods = {}, additionalClass: string[] = []): string {
   return [
      mainClass,
      ...additionalClass.filter(Boolean),
      ...Object.entries(mods)
         .filter(([className, value]) => Boolean(value))
         .map(([className]) => className)
   ].join(' ');
}