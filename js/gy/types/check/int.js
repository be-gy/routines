function gy_types_check_int(value) {
  gy_assert_true(gy_types_isint(value), gy_types_check_errormsg(value, "int"));
}
