function gy_test_assert_exception(message, fcn, ...args) {

  try {
    fcn(...args);
  }
  catch(e) {
    return;
  }
  throw message;
}
