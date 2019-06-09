function gy_compare_int(int1, int2) {
  gy_types_check_int(int1);
  gy_types_check_int(int2);

  if (int1 == int2) {
    return true;
  }
  else {
    return false;
  }
}
