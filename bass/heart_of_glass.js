let in_E = (notes) => n(notes).scale("E:major").transpose(-12)
let in_Cs = (notes) => n(notes).scale("C#:major").transpose(-12)
let in_Csm = (notes) => n(notes).scale("C#:minor").transpose(-12)

let verse_E = in_E("0 ~ 0 ~ 0 ~ 1 -3")
let verse_Csm_1 = in_Csm("0 ~ 0 ~ 0 ~ 2 4") // slide into 2
let verse_Csm_2 = in_Csm("0 ~ 0 ~ 0 ~ -3 -1")
let verse_Csm_whole = in_Csm("0")

let verse_octaves = in_E("0 7 1 8 2b 9b 2 9")

let verse = cat(
                verse_E, verse_Csm_1, verse_Csm_2, verse_E,
                verse_E, verse_Csm_2, verse_Csm_whole, verse_E,
                verse_E, verse_E, verse_E,  // weirdly, 3 times
                verse_E, verse_Csm_1, verse_Csm_2, verse_E,
                verse_E, verse_Csm_2, verse_Csm_whole, verse_E,
                verse_octaves
)


let chorus = null

let bass = 
  verse.slow(1)
  .sound("gm_electric_bass_finger").lpf(900)

let drums = sound(`
  bd sd bd sd
`).bank("RolandTR909");

setcpm(35);
$: bass;
$: drums;