function gy_assert_true(condition, message) {
    if (!condition) {
        gy_exceptions_throw(message);
    }
}
