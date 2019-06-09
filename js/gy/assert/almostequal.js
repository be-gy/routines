function gy_assert_almostequal(lhs, rhs, message, eps) {
  if (gy_math_abs(lhs - rhs) < eps) {
    gy_exceptions_throw(message);
  }
}
