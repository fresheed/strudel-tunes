setcpm(40);

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");


// one extra 8th long
const start_4ths = 
  n("0 0 0@0.5 [2 ~]  -2").scale("F#:minor").transpose(-12);
const start_8ths = 
  n("0 0@0.5 0@0.5 0@0.5 [2 ~]  -2").scale("F#:minor").transpose(-12);
// no first 8th note
const trans78 = 
  n("-2@0.5 [-5!2] [-2!2] [-5!2]").scale("F#:minor").transpose(-12);


let riff11 = stepcat([9/8, start_4ths], [7/8, trans78])
let riff21 = stepcat([9/8, start_8ths], [7/8, trans78])
let riff31 = riff21
let riff41 = riff21

let riff12 =  
  // |                          1/8 | 1/8 
  n("[2 2@0.5 2@0.5  2@0.5 [1 ~]    0   0 -1@0.5  0@0.5  0@0.5  0@0.5 -1@0.5 ]")
  // n("<[2 2@0.5!3 [1 ~] 0 0 -1@0.5  0@0.5  0@0.5  0@0.5 -1@0.5 ]>/2")
  .scale("E:minor").transpose(-12);
let riff22 =  
  // |              1/8   | 1/8 
  n("[0 0 0@0.5 [1 ~] 2   2 1 1@0.5 [0 ~]]")
  .scale("G:minor").transpose(-12);
let riff32 =  
  // |                          1/8 | 1/8 
  n("[2 2@0.5 2@0.5  2@0.5 [1 ~]    0   0@0.5 0@0.5 -1@0.5  0@0.5  1@0.5  0@0.5 -1@0.5 ]")
  // n("<[2 2@0.5!3 [1 ~] 0 0 -1@0.5  0@0.5  0@0.5  0@0.5 -1@0.5 ]>/2")
  .scale("E:minor").transpose(-12);
let riff42 = riff22

let riff1 = cat(riff11, riff12).fast(2)
let riff2 = cat(riff21, riff22).fast(2)
let riff3 = cat(riff31, riff32).fast(2)
let riff4 = cat(riff41, riff42).fast(2)

let verse_end =  
  // |                          1/8 | 1/8 
  n("[2 2@0.5 2@0.5  2@0.5 [1 ~]    0     0@0.5 0@0.5 0@0.5 0@0.5 0@0.5 0 ]")
  .scale("E:minor").transpose(-12);

// actually slightly different 2nd part, but whatever
// "I'm happy to give myself away"
let verse11 = cat(riff21, riff12).fast(2)
// the 4th note before 7/8 ending is also an octave higher
// "I'm happy to fix what I can't change"
let verse12 = cat(stepcat([9/8, start_8ths], [7/8, trans78.transpose(12)]), 
                  riff12).fast(2)
// All because I know ..
let verse13 = verse11 // actually some difference in 2nd half
// All because you know ...
let verse14 = verse12 // same diff
// I'm happy to sink..
let verse15 = verse11 // same diff
// If only...
let verse16 = verse12
let verse17 = verse11 // same diff
let verse18 = cat(stepcat([9/8, start_8ths], [7/8, trans78.transpose(12)]), 
                  verse_end).fast(2)

let verse = cat(verse11, verse12, verse13, verse14, 
                verse15, verse16, verse17, verse18, )

// last 4th is a slide up/down
let chorus11 = n("0@7 0").scale("G:minor").transpose(-24);
let chorus12 = n("0@7 0").scale("E:minor").transpose(-12);
let chorus13 = chorus11
let chorus14 = n("0@9 0@0.5!7").scale("E:minor").transpose(-12);

let chorus1 = cat(chorus11, chorus12, chorus13, chorus14)


let verse21 = verse11
let verse22 = riff2
let verse23 = riff3
let verse24 = riff4 // some diff in the end
let verse25 = verse11
let verse26 = verse12
let verse27 = verse11
let verse28 = verse18

let verse2 = cat(verse21, verse22, verse23, verse24, 
                 verse25, verse26, verse27, verse28, )

let chorus2 = cat(chorus11, chorus12, chorus13, chorus12,
                  chorus11, chorus12, chorus13, chorus14, ) 

let bass =
  //cat(riff1, riff2, riff3, riff4).slow(4)
  //cat(verse11, verse12).slow(4)
  verse2.slow(4)
  .sound("gm_electric_bass_pick")

$: drums;
$: bass;