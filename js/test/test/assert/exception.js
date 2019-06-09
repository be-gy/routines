fcn = function(arg1) {
  if (arg1 == 1) {
	throw "test"
  }
  else {
  	return;
  }
}

gy_test_assert_exception('test', fcn)
