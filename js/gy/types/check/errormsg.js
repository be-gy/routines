function gy_types_check_errormsg(value, type_identifier) {
  return gy_msg_string_error("Expected value to be of type " + type_identifier + ", got this value instead: " + value + ".");
}
