// 7/8; 14 are actually muted 
let verse_Bm_1 = n("[0 ~]@2  [7 [14 14]]@2 [7 4]@2 ~").scale("B:minor").transpose(-24);
// 9/8
let verse_Em = n("0@2 7   ~ [0 ~]@2  0 4 7").scale("E:minor").transpose(-24);
// 7/8; 14 are actually muted 
let verse_C = n("[0 ~]@2  [7 [14 14]]@2 [7 4]@2 ~").scale("C:major").transpose(-12);
// 9/8
let verse_Bm_2 = n("0@2 7   ~ [4 ~]@2  -1 0 2").scale("B:minor").transpose(-24);

let verse = stepcat(
  [7/8, verse_Bm_1],
  [9/8, verse_Em],
  [7/8, verse_C],
  [9/8, verse_Bm_2],
)


let bass = verse.slow(4)
  .sound("gm_electric_bass_pick").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(30);
$: bass;
$: drums.gain(0.3)