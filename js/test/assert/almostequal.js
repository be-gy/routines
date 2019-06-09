function gy_test_assert_almostequal(lhs, rhs, message, eps) {
  if (gy_math_abs(lhs - rhs) < eps) {
    throw message;
  }
}
