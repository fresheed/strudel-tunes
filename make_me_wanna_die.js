
let opening = null // ...

// Fm
let pre_verse_16ths = n("0!16").scale("F:minor").transpose(-24)
// Fm, G#
let pre_verse_alt1 = n("[0!8]@2 2 [3 4b 3@2]").scale("F:minor").transpose(-24)
let pre_verse_alt2 = n("[0!8]@2 2 4b").scale("F:minor").transpose(-24)

let pre_verse = cat(pre_verse_16ths, pre_verse_alt1,
                    pre_verse_16ths, pre_verse_alt2,
                    pre_verse_16ths, pre_verse_alt1)
                   
let verse_Fm_Gs = n("[0!4]@2 [2!4]@2").scale("F:minor").transpose(-24)
// treat is as down to C
let verse_chrom_one = n("[1#!4]@2 [1!4]@2").scale("C:major").transpose(-12)
let verse_chrom_two = n("[0#!4]@2 [0!4]@2").scale("C:major").transpose(-12)
// fits C minor, not major?
let verse_C = n("0 -1 -2 -3").scale("C:minor").transpose(-12)
// slide down on last
let verse_C_alt = n("0!8").scale("C:minor").transpose(-12)

let verse = cat(verse_Fm_Gs, verse_chrom_one, verse_chrom_two, verse_C,
                verse_Fm_Gs, verse_chrom_one, verse_chrom_two, verse_C_alt)


// slide in and out                
let pre_chorus_Cs = n("0@2 -1@2").scale("C#:major").transpose(-12)
let pre_chorus_Fm = n("0 1 2 [3 4]").scale("F:minor").transpose(-24)
// slide in and out
let pre_chorus_Cs_dotted = n("0@1.5 7@0.5 -1@2").scale("C#:major").transpose(-12)
// slide in
let pre_chorus_C = n("7").scale("C:minor").transpose(-12)

let pre_chorus = cat(pre_chorus_Cs, pre_chorus_Fm, pre_chorus_Cs_dotted, pre_chorus_C)

let mk_chorus_pt = (chord, shift) => n("[0 0] [0 0@2 0]").scale(chord).transpose(-12 * shift)
let chorus_bar = (ch1, shift1, ch2, shift2) => seq(mk_chorus_pt(ch1, shift1), mk_chorus_pt(ch2, shift2))

// same rhythm:
// F, G#,  A#, C,  C# D#,  F D#, A#
// end with: C, A#, G#, G 8ths, half pause
let chorus_end = n("[0 -1 -2 -3]@2 ~@2").scale("C:minor").transpose(-12)
let chorus = cat(chorus_bar("F:minor", 2, "F:minor", 2),
                 chorus_bar("G#:minor", 2, "G#:minor", 2),
                 chorus_bar("A#:minor", 2, "A#:minor", 2),
                 chorus_bar("C:minor", 1, "C:minor", 1),

                 chorus_bar("C#:minor", 1, "D#:minor", 1),
                 chorus_bar("F:minor", 1, "D#:minor", 1),
                 chorus_bar("A#:minor", 1, "A#:minor", 1),
                 chorus_end
)

// then pre-verse x2

// then verse riff 1 (the end is slightly different)
let verse_2 = verse

let pre_chorus_2_Fhigh = n("[0!2] [0b!2] [-1!2] [-1b!2]").scale("F:minor").transpose(-12)
let pre_chorus_2_even = n("[0 0 0 7]@2 -1@2").scale("C#:major").transpose(-12)
// there is some extra pre-chorus
let pre_chorus_2 = cat(pre_chorus_Cs, pre_chorus_Fm,
                       pre_chorus_Cs_dotted, pre_chorus_2_Fhigh,
                       pre_chorus_2_even, pre_chorus_C)

// chorus 2: the same
let chorus2 = chorus

// interlude: whole notes, repeat 4 times: F, C#, G#, D# 
let interlude = 
  n("<0 5 2 6>").scale("F:minor").transpose(-24)

let even_chorus_bar = (chord, shift) => n("0!8").scale(chord).transpose(-12 * shift)
// continue with chorus: C# D#,  F D#, A#
let chorus_3 = cat(even_chorus_bar("F:minor", 2),
                   even_chorus_bar("G#:minor", 2),
                   even_chorus_bar("A#:minor", 2),
                   even_chorus_bar("C:minor", 1),
                                   
                 chorus_bar("C#:minor", 1, "D#:minor", 1),
                 chorus_bar("F:minor", 1, "D#:minor", 1),
                 // repeat these 4 bars two more times
                 chorus_bar("C#:minor", 1, "D#:minor", 1),
                 chorus_bar("F:minor", 1, "D#:minor", 1),
                 chorus_bar("C#:minor", 1, "D#:minor", 1),
                 chorus_bar("F:minor", 1, "D#:minor", 1),

                 chorus_bar("A#:minor", 1, "A#:minor", 1),
                 chorus_end
)

// like opening's 1st variation 3 times
let outro = null


let bass = 
  interlude.slow(2)
  .sound("gm_electric_bass_finger").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(40);
$: bass;
$: drums;