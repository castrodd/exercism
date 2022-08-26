export function toRna(dnaStrand: string): string {
    const dnaToRna: Record<string, string> = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U',
    };
    let rnaStrand: string = "";
    for (const letter of dnaStrand) {
      let rna: string = dnaToRna[letter];
      if (rna) {
        rnaStrand += dnaToRna[letter];  
      } else {
        throw 'Invalid input DNA.';
      }
    }
    
    return rnaStrand;
  }
  