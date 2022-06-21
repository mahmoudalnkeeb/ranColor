class HexColor {
  constructor(nums, letters) {
    this.nums = nums;
    this.letters = letters;
  }
  ranColor() {
    let color = [];
    for (let i = 1; i <= 6; i++) {
      let choice = Math.floor(Math.random() * 2);
      switch (choice) {
        case 0:
          color.push(
            this.letters[Math.floor(Math.random() * this.letters.length)]
          );
          break;
        case 1:
          color.push(this.nums[Math.floor(Math.random() * this.nums.length)]);
          break;
        default:
          break;
      }
    }
    return color.join('');
  }
}
