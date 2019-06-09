function gy_compare_str(str1, str2) {
  gy_types_check_string(str1);
  gy_types_check_string(str2);

  if (str1 == str2) {
    return true;
  }
  else {
    return false;
  }
}
