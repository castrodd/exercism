const BASE_CAR_RATE: f64 = 221.0;
const MINS_IN_HR: u32 = 60;

pub fn production_rate_per_hour(speed: u8) -> f64 {
  let rawTotal: f64 = speed as f64 * BASE_CAR_RATE;
  let success_rate = match speed {
    1..=4 => 1.0,
    5..=8 => 0.9,
    _ => 0.77,
  };
  
  rawTotal * success_rate
}

pub fn working_items_per_minute(speed: u8) -> u32 {
  production_rate_per_hour(speed) as u32 / MINS_IN_HR
}
