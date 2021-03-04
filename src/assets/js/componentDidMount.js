import { loadCaptchaEnginge } from 'react-simple-captcha'

export default function componentDidMount(){
  var user_captcha = document.getElementById('captcha');
  if(user_captcha === null){
   async function f(){
    let v = await user_captcha != null
    loadCaptchaEnginge(5);
    console.log(v)
   }
   f();
  }else{
    loadCaptchaEnginge(5);
  }
}