class Complement
  def self.of_dna(strand)
    switch = {'G'=> 'C', 'C'=>'G', 'T'=>'A', 'A'=>'U'}
    ans = ''
    strand.each_char {|c| switch.has_key?(c) ? ans << switch[c] : (ans = ''; break)}
    ans
  end
end


module BookKeeping
  VERSION = 4
end
