function gy_test_assert_equal(lhs, rhs, message) {
    if (lhs != rhs) {
        throw message;
    }
}
