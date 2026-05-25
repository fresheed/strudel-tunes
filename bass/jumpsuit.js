// whatever chords these are...
// opening D: slide down
let intro_one = n("5 3 3 3  [0 5@3] 0 0@2").scale("F#:minor").transpose(-24)
let intro_two = n("[-1 0@3] 0 [-1 0@3] 0   0 [2 3@3] 4 4").scale("B:minor").transpose(-24)
let intro = cat(intro_one, intro_two)

// two bars
// G, A in chords???
let verse_G = n("0@5  6@3").scale("G:major").transpose(-24)
let verse_B = n("0@5  -1@3").scale("B:minor").transpose(-24)
let verse_B_octave = n("0@5  -1 6@2").scale("B:minor").transpose(-24)
let verse_B_split = n("0@2 0@2  ~ -1@3").scale("B:minor").transpose(-24)

let verse_G_stacc = n("[0 ~] ~@0.5 0@0.5 [0 ~] [0 ~]   ~  [0 ~] -1 ~").scale("G:major").transpose(-24)
let verse_B_stacc = n("[0 ~] ~@0.5 0@0.5 [0 ~] [0 ~]   ~  [0 ~] -1 ~").scale("B:minor").transpose(-24)
let verse_B_end = n("0!4  0 0 [0!4]@2").scale("B:minor").transpose(-24)

//let verse = cat(verse_1, verse_2, verse_1, verse_2_octave)
let verse1_stacc = cat(verse_G_stacc, verse_B_stacc, 
                       verse_G_stacc, verse_B_end)


let verse_2_G = n("0@5  ~ ~@0.5 [-1 1 2]@1.5").scale("G:major").transpose(-24)
let verse_2_B = n("0@5  ~ ~@0.5 [-4 -1 0]@1.5").scale("B:minor").transpose(-24)
// slide into and from high E
let jsjs_1 = n("[2 ~] [0 ~] [2 ~] [0 ~]    ~ 10@2 ~").scale("B:minor").transpose(-24)
let jsjs_2 = n("~     ~     [2 ~] [0 ~]    ~ 10@2 ~").scale("B:minor").transpose(-24)

let verse_2 = cat(verse_2_G, verse_2_B)
let jsjs = cat(jsjs_1, jsjs_2)

// slide into high note
let pre_chorus_2_G = n("0!5 6!3").scale("G:major").transpose(-24)
let pre_chorus_2_B = verse_B_end
let pre_chorus_2_B_slides = null

let pre_chorus_2 = cat(verse_G, verse_B, pre_chorus_2_G, pre_chorus_2_B)

// transition:
// D: 3.5 bars, Db: 0.5 bar
// B: 3.5 bars, Db: 0.5 bar
// D: 5 bars (stops somewhere around "I'll be right there...")
// silence until _SECOND_ "If you need anyOONE"
// D: 2 bars, A: 2 bars
// E: 1 bar, F#: 1 bar
// G: 2 bars
// then:

// some diffs in 3rd and 4th
let after_silence_one = cat(verse_G, verse_B_split, verse_G, verse_B_split)
// silence until incl. "pressure of a new place...."
// enter on "jumpsuit, ..."
let after_silence_two = cat(verse_G, pre_chorus_2_B_slides)


let bass = 
  pre_chorus_2.slow(2)
  .sound("gm_electric_bass_finger").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(35);
$: bass;
$: drums;