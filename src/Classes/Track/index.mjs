class TrackLoop {
  constructor(pattern, config) {
    this.pattern = pattern;
    this.config = config;

    this.endTime = 0;

    this.gridDetail = 4;
  }

  playNext() {
    this.endTime = this.pattern.playNext(this.endTime);
  }

  getEndTime() {
    return this.endTime;
  }

  setEndTime(newTime) {
    this.endTime = newTime;
  }
}

class TrackSequential {
  constructor(patterns, config) {
    this.patterns = patterns;
    this.currentPattern = 0;

    this.count = this.patterns[this.currentPattern].getLength();

    this.config = config;

    this.gridDetail = 4;
  }

  playNext() {
    this.endTime = this.patterns[this.currentPattern].playNext(this.endTime);
    this.count -= 1;

    if (this.count === 0) {
      this.currentPattern = (this.currentPattern + 1) % this.patterns.length;
      this.count = this.patterns[this.currentPattern].getLength();
    }
  }

  getEndTime() {
    return this.endTime;
  }

  setEndTime(newTime) {
    this.endTime = newTime;
  }
}

export { TrackLoop, TrackSequential };
