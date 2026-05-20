
let opening = null // ...

// Fm
let verse_16ths = n("0!16").scale("F:minor").transpose(-24)
// Fm, G#
let verse_alt1 = n("[0!8]@2 2 [3 4b 3@2]").scale("F:minor").transpose(-24)
let verse_alt2 = n("[0!8]@2 2 4b").scale("F:minor").transpose(-24)

let verse = cat(verse_16ths, verse_alt1, verse_16ths, verse_alt2)

// same rhythm:
// F, G#,  A#, C,  C# D#,  F D#, A#
// end with: C, A#, G#, G 8ths, half pause
let chorus = null

// then pre-verse x2
// then verse riff 1 (the end is slightly different)
// then verse riff 2
// there is some extra pre-chorus

// chorus the same

// interlude: whole notes, repeat 4 times: F, C#, G#, D# 

let bass = 
  verse.slow(2)
  .sound("gm_electric_bass_finger").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(40);
$: bass;
$: drums;