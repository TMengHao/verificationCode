
        window.onload = function (){
            let cc = document.getElementById('checkCode');
            let lb = document.getElementById('linkBt');
            let bt1 = document.getElementById('button1');
            let ipc = document.getElementById('inputCode');
            let res = getCode();
            cc.innerText = res;
            lb.onclick = function (){
                cc.innerText = res;
            }
            bt1.onclick = function (){
                if (cc.innerText != ipc.value){
                    confirm('您输入的验证码错误');
                    ipc.value = '';
                }else {
                    alert('输入正确');
                    ipc.value = '';
                }
            }
            function getCode(){
                const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                const arr = string.split("");
                let str = '';
                for (let i = 0;i<6;i++){
                    const num = Math.round(Math.random() * (arr.length-1));
                    str += arr[num];
                }
                return str;
            }
        }
