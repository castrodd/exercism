class Gigasecond
  def self.from(t)
     Time.at((t.tv_sec) + 10**9)
  end
end


module BookKeeping
  VERSION = 6
end
