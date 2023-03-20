const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
loadLanguages(['typescript']);

const code = `function useMyData() {
  const [paletteMode, setPaletteMode] = useState<TPaletteMode>('dark');

  function togglePaletteMode() {
    setPaletteMode((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }

  const paletteModeIsLight = paletteMode === 'light';
  return {
    paletteMode,
    setPaletteMode,
    paletteModeIsLight,
    paletteModeIsDark: !paletteModeIsLight,
    togglePaletteMode,
  };
}

export const [PaletteModeContext, usePaletteModeContext] = constate(usePaletteMode);`;

const highlightedCode = Prism.highlight(code, Prism.languages.typescript, 'typescript');

console.log(highlightedCode);
