class Raindrops
  def self.convert(num)
    ans = ''
    if num%3 == 0
      ans << 'Pling'
    end
    if num%5 == 0
      ans << 'Plang'
    end
    if num%7 == 0
      ans << 'Plong'
    end

    if ans == ''
      return num.to_s
    else
      return ans
    end

  end

end


module BookKeeping
  VERSION = 3
end
