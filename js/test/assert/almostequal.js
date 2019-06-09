function gy-test-assert-almostequal(lhs, rhs, message, eps) {
  if (gy-math-abs(lhs - rhs) < eps) {
    throw message;
  }
}
