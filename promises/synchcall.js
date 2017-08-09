Promise.resolve('ta-da!')
.then(
    function step2() {
        console.log('Step 2 exicuited '  );
        //throw new Error('step 2')
        return 'Greetings from step 2';
}).then(
    function step3() {
        console.log('Step 3 exicuited '  );
        //throw new Error('step 3')
}).then( null, //catch
    function (error) {
        console.log('failed1.');
        console.log(error); 
}).then(
    function step4() {
        //throw new Error('step 4..')
        console.log('Step 4 exicuited '  );
        return 'fulfilled value';
}).then( null, //catch
    function (error) {
        console.log('failed2');
        console.log(error); 
}).then(
    function step5() {
        console.log('Step 5 exicuited '  );
        return 'fulfilled value'})
