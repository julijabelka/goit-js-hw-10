import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const m=document.querySelector(".form");m.addEventListener("submit",a);function a(e){e.preventDefault();const i=e.target.state.value,t=e.target.delay.value;new Promise((o,r)=>{setTimeout(()=>{i==="fulfilled"?o(s.success({title:"Resolve",message:`✅ Fulfilled promise in ${t}ms,
            position: 'topRight'`})):r(s.error({title:"Reject",message:`❌ Rejected promise in ${t}ms,
            position: 'topLeft'`}))},t)}),e.currentTarget.reset()}
//# sourceMappingURL=commonHelpers2.js.map
