function gy_test_assert(condition, message) {
    if (!condition) {
        throw message;
    }
}
