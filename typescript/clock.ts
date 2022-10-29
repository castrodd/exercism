// export class Clock {
//   hour: number;
//   minute: number;
  
//   constructor(hour: number, minute?: number) {
//     const safeMinute = minute ? minute : 0
//     const rawMinute = safeMinute % 60
//     this.minute = rawMinute >= 0 ? rawMinute : 60 + rawMinute

//     const rawHour = (hour + Math.floor(safeMinute/60))%24
//     this.hour = rawHour >= 0 ? rawHour : 24 + rawHour
//   }

//   public toString(): string {
//     const hour = this.hour < 10 ? `0${this.hour}` : this.hour.toString()
//     const minute = this.minute < 10 ? `0${this.minute}` : this.minute.toString()
//     return `${hour}:${minute}`
//   }

//   public plus(minutes: number): Clock {
//     const totalMinutes = this.minute + minutes
//     this.hour = (this.hour + Math.floor(totalMinutes/60))%24
//     this.minute = (totalMinutes)%60
//     return new Clock(this.hour, this.minute)
//   }

//   public minus(minutes: number): Clock {
//     const displacement = (this.hour - Math.floor(minutes/60))%24
//     if (displacement > 0) {
//       this.hour = displacement
//     } else {
//       this.hour = 24 + displacement
//     }

//     minutes = minutes%60
//     if (this.minute - minutes >= 0) {
//       this.minute = this.minute - minutes
//     } else {
//        this.minute = 60 + (this.minute - minutes)%60
//        this.hour -= 1
//     }
    
//     return new Clock(this.hour, this.minute)
//   }

//   public equals(other: Clock): Boolean {
//     return this.toString() == other.toString()
//   }
// }

export class Clock {
  static FULL_DAY = 24*60
  private time: number
  
  constructor(hour: number, minute?: number) {
    const safeMinute = minute ? minute : 0
    const initialTime = hour*60 + safeMinute
    
    if (initialTime < 0) {
      this.time = Clock.FULL_DAY + (initialTime)%Clock.FULL_DAY
    } else {
      this.time = initialTime%Clock.FULL_DAY
    }
  }

  public toString(): string {
    const hour = Math.floor(this.time/60)%24
    const minute = this.time%60
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.time + minutes)
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.time - minutes)
  }

  public equals(other: Clock): Boolean {
    return this.toString() == other.toString()
  }
}
