let in_Dm = (notes) => n(notes).scale("D:minor").transpose(-12)
let in_Bb7 = (notes) => n(notes).scale("Bb:mixolydian").transpose(-24)

// @2 is just to make it sound better here
let riff_odd =    in_Dm("[[[0,4]@2 ~] ~] [~ [[0,4]@2 ~]] ~@2")
// pull off in the end
let riff_even_down =     in_Dm("[[[0,4]@2 ~] ~] [~ [[0,4]@2 ~]]   [~ [2 0]] ~")
let riff_even_up_2 =     in_Dm("[[[0,4]@2 ~] ~] [~ [[0,4]@2 ~]]   [~ [-3 -1]] [~ [0 2]]")
let riff_even_down_up =  in_Dm("[[[0,4]@2 ~] ~] [~ [[0,4]@2 ~]]   [~ [6  3]] [~ [0 2]]")
let riff_even_down_twice = in_Dm("[[[0,4]@2 ~] ~] [~ [[0,4]@2 ~]]   [~ [0 2]] [~ [0 2]]")

let opening = null
let intro = cat(riff_odd, riff_even_down, riff_odd, riff_even_up_2)

let verse_1 = cat(riff_odd, riff_even_down, riff_odd, riff_even_down_up,
                  riff_odd, riff_even_up_2, riff_odd, riff_even_down_twice,)

let pre_chorus_asc = in_Dm("[[[0,4]@2 ~] ~] [~ [[0,4]@2 ~]]   [~ [[0,5#]@2 ~]] [[[0,6]@2 ~] ~]")    
let pre_chorus_ad = in_Dm("[[[0,4]@2 ~] ~] [~ [[0,4]@2 ~]]   [~ [[0,5#]@2 ~]] [[[0,6]@2 ~] [[0,5#]@2 ~]]")    

// played twice
let pre_chorus1 = cat(riff_odd, pre_chorus_asc, riff_odd, pre_chorus_ad)

let chorus_Dm =  in_Dm("0 [7 6 4 6] [4#gain:2 3 ~@2] [2 3 ~@2]")
let chorus_Bb7 = in_Bb7("0 [7 6 4 6] [4 3 ~@2] [2 3 ~@2]")
 
let bass = 
  pre_chorus1.slow(1)
  .sound("gm_slap_bass_1").lpf(900)

let drums = sound(`
  [bd, mt] sd bd sd
`).bank("RolandTR909");

setcpm(30);
$: bass;
$: drums;