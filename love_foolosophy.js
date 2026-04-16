// 7/8; 14 are actually muted 
let verse_Bm_1 = n("[0 ~]@2  [7 [14 14]]@2 [7 4]@2 ~").scale("B:minor").transpose(-24);
// 9/8
let verse_Em = n("0@2 7   ~ [0 ~]@2  0 4 7").scale("E:minor").transpose(-24);
// 7/8; 14 are actually muted 
let verse_C = n("[0 ~]@2  [7 [14 14]]@2 [7 4]@2 ~").scale("C:major").transpose(-12);
// 9/8
let verse_Bm_end = n("0@2 7   ~ [4 ~]@2  -1 0 2").scale("B:minor").transpose(-24);

// 7/8; 14 are actually muted 
let verse_C_2 = n("[0 ~]@2  [0@3 14]@2  [0 7]@2 ~").scale("C:major").transpose(-12);
// 9/8
let verse_Bm_end2 = n("0@2 7  [~ 3]@2  [~ 14 2@2]@2 3 -1").scale("B:minor").transpose(-24);

// 9/8
let verse_Em2 = n("0@1.5 4 7@0.5   ~ 0@1.5 14@0.5  4 4 7").scale("E:minor").transpose(-24);
// 9/8
let verse_Bm_end3 = n("0@2 7 ~ 4  [~ 14 2@2]@2 [14 14 3@2]@2").scale("B:minor").transpose(-24);

// 7/8
let verse_Bm_4 = n("[0 ~]@2  [7@3 4]@2 [7 4]@2 ~").scale("B:minor").transpose(-24);
// 9/8
let verse_Em4 = n("0@1.5 4 7 0@0.5 0   ~ 0 4 7").scale("E:minor").transpose(-24);
// 9/8, 9-11 are muted, octave is pop
let verse_Bm_end4 = n("0@2.5 7 11@0.5 4  ~@0.5 9@0.5 2   [3 -1]@2").scale("B:minor").transpose(-24);


let verse_1 = stepcat(
  [7/8, verse_Bm_1],
  [9/8, verse_Em],
  [7/8, verse_C],
  [9/8, verse_Bm_end],
)

let verse_2 = stepcat(
  [7/8, verse_Bm_1], // some diffs
  [9/8, verse_Em], // some diffs
  [7/8, verse_C_2],
  [9/8, verse_Bm_end2]
)

let verse_3 = stepcat(
  [7/8, verse_Bm_1],
  [9/8, verse_Em2],   
  [7/8, verse_C],
  [9/8, verse_Bm_end3]
)

let verse_4 = stepcat(
  [7/8, verse_Bm_4],
  [9/8, verse_Em4],   
  [7/8, verse_C_2],
  [9/8, verse_Bm_end4],  

)

let bass = verse_4.slow(4)
  .sound("gm_electric_bass_pick").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(30);
$: bass;
$: drums.gain(0.3)