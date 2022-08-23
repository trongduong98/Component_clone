import themeColors from 'theme.colors.json';

export class AppModule {
  static getThemeColors() {
    let colors = {
      "primary": [] as string[],
      "success": [] as string[],
      "info": [] as string[],
      "warning": [] as string[],
      "danger": [] as string[],
    }

    Object.keys(themeColors).map((tKey: string) => {
      const themeColorKey = tKey as keyof typeof themeColors;
      Object.keys(colors).map((cKey: string) => {
        const colorKey = cKey as keyof typeof colors;
        if (themeColorKey.indexOf(colorKey) !== -1) {
          if (!colors[colorKey].length) colors[colorKey].push(themeColors[themeColorKey]);
          colors[colorKey].push(themeColors[themeColorKey])
        }
      })
    })

    return colors as any;
  }
}