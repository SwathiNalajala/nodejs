#!bin/bash

for i in {1..$1}
	do

	sed `s/user1/user$i/` multiuser_test1.js > multiuser_test$i.js
done
