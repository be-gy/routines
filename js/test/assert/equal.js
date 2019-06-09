function gy-test-assert-equal(lhs, rhs, message) {
    if (lhs != rhs) {
        throw message;
    }
}
