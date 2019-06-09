function gy_assert_equal(lhs, rhs, message) {
    if (lhs != rhs) {
        gy_exceptions_throw(message);
    }
}
