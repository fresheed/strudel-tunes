// Am and C; not bothering with splitting into chords properly
let verse_one = n("0 0 ~  -1 0 0 ~   0 2 2 ~ 0 2 2 ~ -3").scale("A:minor").transpose(-24);
// F, Dadd9
let verse_two =         n("0 0 ~  -1 0 0 ~   2 5 5 ~ 2 5  5 ~ 1").scale("F:major").transpose(-24);
let verse_two_alt_end = n("0 0 ~  -1 0 0 ~   2 5 5 ~ 2 5 -1 1 2").scale("F:major").transpose(-24);
// also some other variation before the chorus
let verse = cat(verse_one, verse_two)

// B, C
let chorus_one = n("0!8 1b!8").scale("B:major").transpose(-24);
// ? in the tabs the chords are A, C / A, F; easier to treat as F#,C
let chorus_two =     n("0!8 4b!8").scale("F#:major").transpose(-24);
let chorus_two_alt = fastcat(n("0!8").scale("F#:major").transpose(-24),
                         n("0 0 2 4b 4 5 4 4b").scale("F:major").transpose(-24),)

let chorus = cat(chorus_one, chorus_two, chorus_one, chorus_two_alt)                         

let bass = 
  chorus.slow(2)
  .sound("gm_electric_bass_finger").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(40);
$: bass;
$: drums;