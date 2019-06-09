function gy-test-assert(condition, message) {
    if (!condition) {
        throw message;
    }
}
