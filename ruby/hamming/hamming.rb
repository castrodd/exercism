class Hamming
  def self.compute(x, y)
    raise ArgumentError unless x.length == y.length
    tot = 0
    (0..x.length-1).each {|n| x[n] != y[n] ? tot += 1 : next}
    tot
  end
end

module BookKeeping
  VERSION = 3
end
