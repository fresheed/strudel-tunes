
let opening = null // ...

// Fm
let verse_16ths = n("0!16").scale("F:minor").transpose(-24)
// Fm, G#
let verse_alt1 = n("[0!8]@2 2 [3 4b 3@2]").scale("F:minor").transpose(-24)
let verse_alt2 = n("[0!8]@2 2 4b").scale("F:minor").transpose(-24)

let verse = cat(verse_16ths, verse_alt1, verse_16ths, verse_alt2)

let bass = 
  verse.slow(2)
  .sound("gm_electric_bass_finger").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(40);
$: bass;
$: drums;