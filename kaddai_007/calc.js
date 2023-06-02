let num = 42;

if(num % 3 === 0 && num % 5 === 0) {         // この条件を先に書いた方がいいでしょうか？
    console.log("３と５の倍数です")       // 5の倍数チェックを先にしてしまうと３と５の倍数も
}                                      // 3と５の倍数も５の倍数ですで表示されてしまうため
else if (num % 5 === 0){
    console.log("５の倍数です");
}
else {
    console.log(num);
}