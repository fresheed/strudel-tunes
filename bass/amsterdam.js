let in_Gm = (notes) => n(notes).scale("G:minor").transpose(-24)
let in_Bb = (notes) => n(notes).scale("Bb:major").transpose(-24)
let in_Eb = (notes) => n(notes).scale("Eb:major").transpose(-12)

let verse_Gm_1 = in_Gm("4 2 ~  4 6 4 ~ 4")
let verse_Gm_2 = in_Gm("~ 4 ~ 4 ~ 4 ~ 7")
let verse_Bb_1 = in_Bb("7 5 ~ 2 4 2 ~ 2")
let verse_Bb_2 = in_Bb("~ 2 ~ 4 ~ 7 ~ 0")

let verse = cat(verse_Gm_1, verse_Gm_2, verse_Bb_1, verse_Bb_2)

let chorus_Eb = in_Bb("0 0 ~ 0 0 0 ~ 0")
let chorus_Eb_trans = in_Bb("0 0 ~ 0 0 0 ~ -6")
let chorus_Gm = in_Gm("0 0 ~ -1 0 0 ~ -1")
let chorus_Gm_trans = in_Gm("0 0 ~ -1 0 0 ~ 0")
let chorus_Bb = in_Bb("0 0 ~ 0 1 1 ~ 3")

let chorus = cat(chorus_Eb, chorus_Eb, chorus_Eb, chorus_Eb_trans,
                 chorus_Gm, chorus_Gm, chorus_Gm_trans, chorus_Bb)

let bass = 
  verse.slow(1)
  .sound("gm_slap_bass_1").lpf(900)

let drums = sound(`
  bd sd bd sd
`).bank("RolandTR909");

setcpm(40);
$: bass;
$: drums;