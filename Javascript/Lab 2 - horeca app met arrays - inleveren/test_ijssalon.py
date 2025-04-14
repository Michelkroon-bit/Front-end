from test_lib import *
from function_copy import *


expected = 'bakje'
result = get_bakje_of_hoorntje(5)
test('get bakje test 1' , expected , result)


if __name__ == "__main__":
    report()