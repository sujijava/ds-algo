var isBalanced = function (root) {
  let lh = 0;
  let rh = 0;
  let left = root.left;
  let right = root.right;

  while (left || right) {
    if (left) {
      left = left.left;
      lh++;
    }
    if (right) {
      right = right.right;
      rh++;
    }
    if (lh > rh + 2 || rh > lh + 2) {
      return false;
    }
  }

  if (lh <= rh + 1 || rh >= lh + 1) {
    return true;
  }
};
