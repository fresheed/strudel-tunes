// whatever chords these are...
// opening D: slide down
let intro_one = n("5 3 3 3  [0 5@3] 0 0@2").scale("F#:minor").transpose(-24)
let intro_two = n("[-1 0@3] 0 [-1 0@3] 0   0 [2 3@3] 4 4").scale("B:minor").transpose(-24)
let intro = cat(intro_one, intro_two)

// two bars
// G, A in chords???
let verse_G = n("0@5  6@3").scale("G:major").transpose(-24)
let verse_A = n("0@5  -1@3").scale("B:minor").transpose(-24)
let verse_A_octave = n("0@5  -1 6@2").scale("B:minor").transpose(-24)

let verse_G_stacc = n("[0 ~] ~@0.5 0@0.5 [0 ~] [0 ~]   ~  [0 ~] -1 ~").scale("G:major").transpose(-24)
let verse_A_stacc = n("[0 ~] ~@0.5 0@0.5 [0 ~] [0 ~]   ~  [0 ~] -1 ~").scale("B:minor").transpose(-24)
let verse_A_end = n("0!4  0 0 [0!4]@2").scale("B:minor").transpose(-24)

//let verse = cat(verse_1, verse_2, verse_1, verse_2_octave)
let verse1_stacc = cat(verse_G_stacc, verse_A_stacc, 
                       verse_G_stacc, verse_A_end)


let verse_2_G = n("0@5  ~ ~@0.5 [-1 1 2]@1.5").scale("G:major").transpose(-24)
let verse_2_A = n("0@5  ~ ~@0.5 [-4 -1 0]@1.5").scale("B:minor").transpose(-24)
// slide into and from high E
let jsjs_1 = n("[2 ~] [0 ~] [2 ~] [0 ~]    ~ 10@2 ~").scale("B:minor").transpose(-24)
let jsjs_2 = n("~     ~     [2 ~] [0 ~]    ~ 10@2 ~").scale("B:minor").transpose(-24)

let verse_2 = cat(verse_2_G, verse_2_A)
let jsjs = cat(jsjs_1, jsjs_2)

let bass = 
  jsjs.slow(2)
  .sound("gm_electric_bass_finger").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(35);
$: bass;
$: drums;