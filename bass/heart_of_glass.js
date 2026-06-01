let in_E = (notes) => n(notes).scale("E:major").transpose(-12)
let in_Cs = (notes) => n(notes).scale("C#:major").transpose(-12)
let in_Csm = (notes) => n(notes).scale("C#:minor").transpose(-12)
let in_A = (notes) => n(notes).scale("A:major").transpose(-24)
let in_B = (notes) => n(notes).scale("B:major").transpose(-24)

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

let chorus_A = in_A("[0 ~]!4")
let chorus_A_trans = in_A("[0 ~]!3 [0 4]")
let chorus_E = in_E("[-7 ~]!4")
let chorus_E_slides = in_E("[-1b 0] [0 ~]!2 0") // slide into first and from the last E
let chorus_octaves = in_B("0 7 1 8 2b 9b 2 9")
let chorus = cat(chorus_A, chorus_A, chorus_E, chorus_E, 
                 chorus_A, chorus_A_trans, chorus_E_slides, chorus_octaves, 
)

let chorus_2 = cat(chorus_A, chorus_A, chorus_E, chorus_E, 
                   chorus_A, chorus_A, chorus_E, verse_octaves
)

let bass = 
  chorus.slow(1)
  .sound("gm_electric_bass_finger").lpf(900)

let drums = sound(`
  bd sd bd sd
`).bank("RolandTR909");

// two bars each: 4/4 and 3/4
// won't play well with current drums
let chorus_A_74 = in_A("[0 ~]!6 [0 4]").slow(2)
let chorus_E_74 = in_E("[-7 ~]!6 [-7 0]").slow(2)

let chorus_inter = cat(
  chorus_A_74, chorus_E_74,
  chorus_A_74, chorus_E, verse_octaves)

let chorus_after = chorus

setcpm(35);
$: bass; $: drums;