let in_Bb = (notes) => n(notes).scale("Bb:major").transpose(-12)

let riff =             in_Bb("0 0 ~  -1b 0 1b [2 3] 2").gain("1 0.25 1!6")
let riff_pause =       in_Bb("0 ~ ~  -1b 0 1b [2 3] 2")
let riff_low =         in_Bb("0@2 -3 -1b 0 1b [2 3] 2")
let riff_desc =        in_Bb("2 0 -3 -1b 0 1b [2 3] 2")
let riff_low_trem =    in_Bb("0@2 -3 -1b 0 1b [2 3] [2 3]")

// 4 times without drums
// 4 times w/ drums
// 8 times pause

let intro_long = cat(riff_low, riff_desc, riff_low, riff_low_trem,
                     riff_low, riff_low, riff_low, riff_low, )

let verse = cat(riff_pause, riff_pause, riff_pause, riff_pause,
                riff_pause, riff_pause, riff_pause, riff_pause)                     

let chorus_1 = in_Bb("0@2 -4 -3  0 -1b@2  -1b")
let chorus_2 = in_Bb("0@2 -4 -3  0 -1b -4 -1b")
let chorus_3 = in_Bb("0@2  2 0   -1b 0@2 -1b")

// 2 bars
let chorus_high = 
  in_Bb("0@2  2 0   2  3@2 [3 4@5]@2 3 2 0 -1b 0@2 -1b") // same end as in chorus_3

// let chorus = cat(chorus_1, chorus_2, chorus_3, chorus_3)
let chorus = stepcat([2, chorus_high], [1, chorus_3], [1, chorus_3]).slow(4)

let bass = 
  chorus.slow(1)
  .sound("gm_electric_guitar_clean").lpf(900)

let drums = sound(`
  bd sd bd sd
`).bank("RolandTR909");

setcpm(35);
$: bass; $: drums;