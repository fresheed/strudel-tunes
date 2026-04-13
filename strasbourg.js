/* let bass = 
  chorus1.slow(1)
  .sound("gm_electric_bass_pick").lpf(900)
 */


//               Bb 1    Cm 1  |Db7_1 7  3 7
let riff1 = n("0@2 0@2  1 1@2  2@6    1 -3 1").scale("Bb:minor").transpose(-24);
// let riff2 = n("0@2 0@2  1 1@2  2@4  1@0.5 2b@0.5 2@0.5 -1@0.5 -5@3").scale("Bb:minor").transpose(-24);
let riff2 = stepcat(
  [2, n("0@2 0@2").scale("Bb:minor").transpose(-24)],
  [1.5, n("0 0@2").scale("C:minor").transpose(-12)],
  [4.5, n("0@4 1@0.5 2b@0.5 2@0.5 -1@0.5 -5@3").scale("Db:major").transpose(-12)],
)
let riff3 = stepcat(
  [2, n("0@2 0@2").scale("Bb:minor").transpose(-24)],
  [1.5, n("0 0@2").scale("C:minor").transpose(-12)],
  [2, n("0@2 0 1b").scale("Db:major").transpose(-12)],
  [2.5, n("0@2 0 2 4").scale("Eb:major").transpose(-12)],
)

let bass = riff3.slow(2)
  .sound("gm_electric_bass_pick").lpf(900)

let drums = sound(`
  bd sd rim sd,
  hh * 8
`).bank("RolandTR909");

setcpm(25);
$: bass;
$: drums.gain(0.3)