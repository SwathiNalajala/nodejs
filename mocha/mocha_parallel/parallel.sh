#!bin/bash

for i in `seq 2 $1`
do
	echo $i
	`sed s/user1/user$i/ multiuser_test1.js > multiuser_test$i.js`
done
cd ..
./node_modules/.bin/mocha-parallel-tests mocha_parallel/
cd mocha_parallel
for i in `seq 2 $1`
do
	rm multiuser_test$i.js
done
