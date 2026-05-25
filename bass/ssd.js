// plus pre-8th low F;                    bend
let opening = n("7 6 5 [4 3]   [[3 ~] 3] [2b ~] [0 4 6 7]@2").scale("F:mixolydian").transpose(-24);

// 7/8
let verse_F = n("0 [0@3 4]  [7 7b] 6@0.5").scale("F:mixolydian").transpose(-24);
// !! 8/8 but shifted by 1/8 
let verse_Dm7 = n("0@2.25  0@0.25  [0 0#] 1@0.5").scale("D:minor").transpose(-12);
// !! 8/8 but shifted by 1/8 
let verse_F_high = n("7@2.25 7@0.25  [7 7b] 6@0.5   ").scale("F:mixolydian").transpose(-24);
// finally 9/8;  chords treated D as a standalone chord, but it'd be messy with 8ths shifts 
let verse_Dm7_F9 = n("5@2.5  [7 0 1 3]@2").scale("F:mixolydian").transpose(-24);

let verse = stepcat(
  [7/8, verse_F],
  [8/8, verse_Dm7],
  [8/8, verse_F_high],
  [9/8, verse_Dm7_F9],
)

let pre_chorus = stepcat( // note F major in the second part
  [7/8, n("[7@7 5]@2 [7 3 4@2] 5@0.5").scale("F:mixolydian").transpose(-24)],
  [9/8, n("7@1.25 7@0.25   [2@0.5 2 3 3@0.5 4b]@2 [4 -1]").scale("F:major").transpose(-24)],
)


let chorus_F = n("[0@7 0]@2  [1 2b 2 3]@2").scale("F:mixolydian").transpose(-24);
let chorus_Bb = n("[0@7 0]@2  [1 2b 3 3]@2").scale("Bb:mixolydian").transpose(-24);

let chorus = cat(chorus_F, chorus_Bb)

let bass = 
  pre_chorus.slow(2)
  .sound("gm_electric_bass_finger").lpf(900)

/* structure:
  intro
  
  verse 1
  intro  
  verse 2
  pre-chorus

  chorus (x4)
  intro
  intro

  verse 3
  intro
  verse 4
  pre-chorus

  chorus (x4)
  intro
  intro

  outro: chorus (?x5)

*/  

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(30);
$: bass;
$: drums;