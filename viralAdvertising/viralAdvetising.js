function viralAdvertising(n) {
  // Write your code here
  let people = 5;
 let  likes = 0;
  let Cummultive = 0;

  for (var i = 1; i <= n; i++) {
    likes = Math.floor(people / 2);
    Cummultive = Cummultive + likes;
    people = Math.floor(likes) * 3;
  }
  return Cummultive;
}
